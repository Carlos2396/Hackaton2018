import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../models/user.model';
import { Mash } from '../../../models/mash.model';
import { Round } from '../../../models/round.model';
import { Snippet } from '../../../models/snippet.model';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-mash-retrieve',
  templateUrl: './mash-retrieve.component.html',
  styleUrls: ['./mash-retrieve.component.css']
})
export class MashRetrieveComponent implements OnInit {


  message: string;
  mash: Mash;
  id: number;
  snippets: Snippet[];
  rounds: Round[];
  roundViewd: number;
  roundCount: number;
  constructor(private crud: CrudService, private router: Router, private route: ActivatedRoute, private auth:AuthService) { }

  ngOnInit() {
    this.message = '';
    this.mash = new Mash(null, null, null, null,null,null,null,null,null,null,null,null);
    this.mash.user =  new User(null,null, null,null, null, null);
    this.roundCount = 0;
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));

    console.log(this.auth.isLoggedIn());

    this.crud.retrieve(this.crud.models.MASH, this.id)
    .subscribe(
      (res:Mash)=>{
        console.log(res);
        this.mash = res;
        this.rounds = this.mash.rounds;
        this.roundCount = this.rounds.length;
      },
      (err:HttpErrorResponse) => {
        if(err.error){
          this.message = err.error.message;
        }
        else{
          this.message = err.error.errors[0].message;
        }
      }
    )
  }

  askForView(id: number) {
    for (let round of this.rounds) {
      if (round.id = id) {
        this.snippets = round.snippets;
      }
    }

    this.roundViewd = id;
  }

  imShowing(id: number){
    if(id == this.roundViewd)
      return true;
    else{
      return false;
    }
    
  }

  removeMessage(){
    this.message = '';
  }
}
