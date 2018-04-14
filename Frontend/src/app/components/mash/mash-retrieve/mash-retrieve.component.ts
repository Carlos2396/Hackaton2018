import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../models/user.model';
import { Mash } from '../../../models/mash.model';
import { Round } from '../../../models/round.model';
import { Snippet } from '../../../models/snippet.model';

import { Router, ActivatedRoute } from '@angular/router';


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
  constructor(private crud:CrudService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.message = '';
    this.mash = new Mash(null, null, null, null,null,null,null,null,null,null,null,null);
    this.mash.user =  new User(null,null, null,null, null, null);
    
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));

    this.crud.retrieve(this.crud.models.MASH, this.id)
    .subscribe(
      (res:Mash)=>{
        console.log(res);
        this.mash = res;
        this.rounds = this.mash.rounds;
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
    this.roundCount = this.rounds.length;
  }

  askForView(id: number){
    for(let round of this.rounds){
      if(round.id = id){
        this.snippets = round.snippets;
      }
    }
    
    this.roundViewd = id;
  }

  imShowing(id: number){
    return id == this.roundViewd;
  }
  removeMessage(){
    this.message = '';
  }
}
