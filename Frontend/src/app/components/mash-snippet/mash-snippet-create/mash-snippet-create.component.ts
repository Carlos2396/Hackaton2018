import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.model';
import { Round } from '../../../models/round.model';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mash-snippet-create',
  templateUrl: './mash-snippet-create.component.html',
  styleUrls: ['./mash-snippet-create.component.css']
})
export class MashSnippetCreateComponent implements OnInit {

  message: string;
  round_id: number;
  snippet_id: number;
  start_time: number;

  constructor(private auth:AuthService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.round_id = this.route.snapshot.params.round_id;
  }

  create(){
    if(this.validate()){
      let body={
        round_id : this.round_id,
        snippet_id: this.snippet_id,
        start_time: this.start_time,
        id: null
      }
    }
    return false;
  }

  validate(){

    if(!this.mash.round_id){
      this.message = 'No hay una ronda seleccionada';
      return false;
    }
    if(!this.mash.snippet_id){
      this.message = 'Debes escoger un snippet.';
      return false;
    }
    if(!this.mash.start_time){
      this.message = 'Debes escoger una cantidad de segundos antes de que empiece tu snippet.';
      return false;
    }
    else{
      this.message = '';
      console.log('Validado');
      return true;
    }
  }

}
