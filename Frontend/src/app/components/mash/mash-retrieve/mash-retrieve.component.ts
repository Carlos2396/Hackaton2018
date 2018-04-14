import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../models/user.model';
import { Mash } from '../../../models/mash.model';
import { Round } from '../../../models/round.model';
import { Snippet } from '../../../models/snippet.model';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { allResolved } from 'q';


@Component({
  selector: 'app-mash-retrieve',
  templateUrl: './mash-retrieve.component.html',
  styleUrls: ['./mash-retrieve.component.css']
})
export class MashRetrieveComponent implements OnInit {


  message: string;
  successMessage: string;
  mash: Mash;
  id: number;
  allSnippets: Snippet[];
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
    this.rounds = null;
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.successMessage = '';
    console.log(this.auth.isLoggedIn());

    this.crud.retrieve(this.crud.models.MASH, this.id)
    .subscribe(
      (res:Mash)=>{
        console.log(res);
        this.mash = res;
        this.rounds = this.mash.rounds;
        this.roundCount = this.rounds.length;
      },
      err => {
        console.log(err);
        Object.values(err.error).forEach( error => {
          this.message = error[0];
        });
      }
    )
  }

  askForView(id: number) {
    if(id != 0){
      this.crud.retrieve(this.crud.models.ROUND, id)
      .subscribe(
        (res:Round)=>{
          this.snippets = res.snippets;
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
      this.roundViewd = id;
    }
    else{
      this.roundViewd = 0;
    }
    
    
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

  createMashUser(){
    var user_id = this.auth.getUser().id;
    let x ={
      mash_id: this.id,
      user_id: user_id
    }

    this.crud.create(this.crud.models.MASH_USER, x)
    .subscribe(
      (res)=>{
        console.log(res);
        this.successMessage = 'Le diste like sin errores'
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

  addSnippet(){
    this.router.navigate(['mash/'+this.mash.rounds.length + '/snippet']);
  }
}
