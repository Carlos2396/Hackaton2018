import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../models/user.model';
import { Mash } from '../../../models/mash.model';
import { Round } from '../../../models/round.model';
import { Snippet } from '../../../models/snippet.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mash-list',
  templateUrl: './mash-list.component.html',
  styleUrls: ['./mash-list.component.css']
})
export class MashListComponent implements OnInit {

  message: string;
  mashes: Mash[];
  mashesDest: Mash[];

  constructor(private crud:CrudService, private router:Router) { }

  ngOnInit() {
    this.message = '';
    this.crud.list(this.crud.models.MASH)
    .subscribe(
      (res:Mash[])=>{
        console.log(res);
        if(res.length > 3){
          this.mashesDest = res.slice(0,3);
          this.mashes = res.slice(3);
        }
        else{
          this.mashesDest = res;
          this.mashes = null;
        }
        
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


}
