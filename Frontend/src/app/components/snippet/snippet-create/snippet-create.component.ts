import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.model';
import { Snippet } from '../../../models/snippet.model';
import { CrudService } from '../../../services/crud.service';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Instrument } from '../../../models/instrument.model';

@Component({
  selector: 'app-snippet-create',
  templateUrl: './snippet-create.component.html',
  styleUrls: ['./snippet-create.component.css']
})
export class SnippetCreateComponent implements OnInit {
  message: string;
  user: User;
  snippet: Snippet;
  instruments: Instrument;

  constructor(private crud: CrudService, private auth: AuthService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.snippet = new Snippet(null, null, null, null, null, null, null, null, null);
    let user_id = this.auth.getUser().id;
    this.snippet.user_id = user_id;

    this.crud.list(this.crud.models.INSTRUMENT)
    .subscribe(
      (res:Instrument) => {
        this.instruments = res;
      },
      err => {
        Object.values(err.error).forEach( error => {
          this.message = error[0];
        });
      }
    )
  }

  create() {
    if (this.validate()) {
      return true;
    }
    else{
      return false;
    }
  }

  validate() {

    if (!this.snippet.name) {
      this.message = 'Debes escoger un nombre para tu snippet';
      return false;
    }

    if (!this.snippet.instrument_id) {
      this.message = 'Debes escoger un instrumento';
      return false;
    }
    
    this.message = '';
    console.log('Validado');
    return true;
  }

}
