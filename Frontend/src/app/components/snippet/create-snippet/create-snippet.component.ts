import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-snippet',
  templateUrl: './create-snippet.component.html',
  styleUrls: ['./create-snippet.component.css']
})
export class CreateSnippetComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

}
