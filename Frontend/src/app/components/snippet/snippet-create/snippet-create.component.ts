import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.model';
import { Snippet } from '../../../models/snippet.model';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-snippet-create',
  templateUrl: './snippet-create.component.html',
  styleUrls: ['./snippet-create.component.css']
})
export class SnippetCreateComponent implements OnInit {

  message: string;
  user: User;
  snippet: Snippet;

  constructor(private crud:CrudService, private auth:AuthService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.snippet = new Snippet(null, null, null, null, null, null, null, null, null);
    let user_id = this.auth.getMember().id;
    this.snippet.user_id = user_id;
  }

  create(){
    if(this.validate()){
      this.crud.create(this.crud.models.SNIPPET, this.snippet)
      .subscribe(
        (res:Snippet)=>{
          this.snippet = res;
          this.router.navigate(['mashes']);
        },
        (err:HttpErrorResponse) => {
          console.log(err);
          if(err.error){
            this.message = err.error.message;
          }
          else{
            this.message = err.error.errors[0].message;
          }
        }
      )
    }
    return false;
  }

  validate(){

    if(!this.snippet.name){
      this.message = 'Debes escoger un nombre para tu snippet';
      return false;
    }

    if(!this.snippet.instrument_id){
      this.message = 'Debes escoger un instrumento';
      return false;
    }

    if(!this.snippet.path){
      this.message = 'Debes escoger un tempo';
      return false;
    }
  }

}
