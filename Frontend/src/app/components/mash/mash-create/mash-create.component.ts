import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mash-create',
  templateUrl: './mash-create.component.html',
  styleUrls: ['./mash-create.component.css']
})
export class MashCreateComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    
  }

}
