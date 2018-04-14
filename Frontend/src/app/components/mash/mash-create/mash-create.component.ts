import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.model';
import { Mash } from '../../../models/mash.model';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mash-create',
  templateUrl: './mash-create.component.html',
  styleUrls: ['./mash-create.component.css']
})
export class MashCreateComponent implements OnInit {

  message: string;
  user: User;
  mash: Mash;

  constructor(private crud:CrudService, private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.mash = new Mash(null, null, null, null, null, null, null, null, null, null, null, null, null);
    let user_id = this.auth.getUser().id;
    this.mash.user_id = user_id;
  }

  create(){
    if(this.validate()){
      this.crud.create(this.crud.models.MASH, this.mash)
      .subscribe(
        (res:Mash)=>{
          this.mash = res;
          this.router.navigate(['mash/' + res.id]);
        },
        err => {
          console.log(err);
          Object.values(err.error).forEach( error => {
            this.message = error[0];
          });
        }
      )
    }
    return false;
  }

  validate(){

    if(!this.mash.name){
      this.message = 'Debes escoger un nombre para tu mash-up.';
      return false;
    }
    if(!this.mash.snippet_id){
      this.message = 'Debes escoger un snippet.';
      return false;
    }
    if(!this.mash.bpm){
      this.message = 'Debes escoger un tempo.';
      return false;
    }
    if(!this.mash.key){
      this.message = 'Debes escoger una escala.';
      return false;
    }
    if(!this.mash.metre){
      this.message = 'Debes escoger una métrica.';
      return false;
    }
    if(!this.mash.start_datetime){
      this.message = 'Debes escoger un día y hora de inicio de la colaboración';
      return false;
    }
    if(!this.mash.quantum){
      this.message = 'Debes escoger un tiempo de pariticipación por ronda';
      return false;
    }
    else{
      this.message = '';
      console.log('Validado');
      return true;
    }
  }

  onSelectCancel(){
    this.router.navigate(['mash/']);
  }

}
