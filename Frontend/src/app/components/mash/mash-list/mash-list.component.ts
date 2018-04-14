import { Component, OnInit } from '@angular/core';
import * as Pz from "pizzicato";
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../models/user.model';
import { Mash } from '../../../models/mash.model';
import { Round } from '../../../models/round.model';
import { Snippet } from '../../../models/snippet.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-mash-list',
  templateUrl: './mash-list.component.html',
  styleUrls: ['./mash-list.component.css']
})
export class MashListComponent implements OnInit {

  successMessage: string;
  message: string;
  mashes: Mash[];
  mashesDest: Mash[];

  constructor(private crud:CrudService, private router:Router,  private auth:AuthService) { }

  ngOnInit() {
    this.message = '';
    this.crud.list(this.crud.models.MASH)
    .subscribe(
      (res:Mash[])=>{
        console.log(res);
        if(res.length > 3){
          this.mashesDest = res.slice(0,3);
          this.mashes = res.slice(3);
          console.log(this.mashes);
        }
        else{
          this.mashesDest = res;
          this.mashes = null;
        }
        
      },
      err => {
        console.log(err);
        Object.values(err.error).forEach( error => {
          this.message = error[0];
        });
      }
    )
  }

  createMashUser(id: number){
    var user_id = this.auth.getUser().id;
    let x ={
      mash_id: id,
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

  removeMessage(){
    this.successMessage = '';
    this.message = '';
  }


  playAll(){
    
    console.log("Playing");
    var audio1 = new Pz.Sound('../../../assets/music/bensound-cute.mp3', function(){
      var audio2 = new Pz.Sound('../../../../../assets/music/bensound-jazzyfrenchy.mp3', function(){
        var group = new Pz.Group();
        
        group.addSound(audio1);
        group.addSound(audio2);
        group.play();
      });
    });
    
  }
}
