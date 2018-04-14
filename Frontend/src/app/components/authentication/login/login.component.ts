import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  successMessage:string;
  errorMessage:string;
  email: string;
  password: string;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['mash/1'])
    }

    this.email = '';
    this.password = '';
    this.successMessage = '';
    this.errorMessage = '';
  }

  login(){
    if(this.validate()){
      this.auth.login(this.email, this.password)
      .subscribe(
        res => {
          console.log("Success.");
          this.auth.setSession(res);
          console.log(this.auth.isLoggedIn());
          this.router.navigate(['mash/1']);
        },
        err => {
          console.log(err);
          Object.values(err.error).forEach( error => {
            this.errorMessage = error[0];
          });
        }
      );
    }
    
    return false;
}

  validate(){
    if(!this.email || !this.password){
      this.errorMessage = 'Debes introducir tu email y contraseña.';
      return false;
    }
    else{
      this.errorMessage = '';
      return true;
    }
  }
  
  removeMessage(){
    this.errorMessage = '';
    this.successMessage = '';
  }

}
