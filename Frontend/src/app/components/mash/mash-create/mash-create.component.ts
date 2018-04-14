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

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.mash = new Mash(null, null, null, null, null, null, null, null, null, null, null, null, null);
    let user_id = this.auth.getMember().id;
    this.mash.user_id = user_id;
  }

}
