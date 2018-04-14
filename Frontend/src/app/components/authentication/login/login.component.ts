import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string;
  email: string;
  password: string;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['home'])
    }

    this.email = '';
    this.password = '';
  }

  login(){
    if(this.validate()){
      this.auth.login(this.email, this.password)
      .subscribe(
        res => {
          this.auth.setSession(res);
          this.router.navigate(['home']);
        },
        err => {
          this.message = err.error.message;
          this.password = '';
        }
      );
    }
    
    return false;
}

  validate(){
    if(!this.email || !this.password){
      this.message = 'Debes introducir tu email y contraseña.';
      return false;
    }
    else{
      this.message = '';
      return true;
    }
  }
  
}
