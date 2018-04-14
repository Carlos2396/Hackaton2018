import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user.model'
import { CrudService } from '../../../services/crud.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  errorMessage: string;
  successMessage: string;
  user: User;

  //A string to store the password confirmation
  password2: string; 

  constructor(private auth:AuthService, private router:Router, private crud: CrudService) { }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['home'])
    }
    this.errorMessage = '';
    this.successMessage = '';
    this.password2 = '';
    this.user = new User(null,null,null,null,null,null);
  }

  createUser() {

    if (this.validateNonEmptyFields() && this.areEqualPasswords()) {

      this.crud.registerUser(this.user)
        .subscribe(
          (res: User) => {

            /*  
              Ideally, a errorMessage of success should be displayed
              to let the user know that the registration was
              successful. So far, we're only taking the user 
              to the login view.
            */
            this.successMessage = 'The registration was successful!';
            this.router.navigate(['/']);
          },
          err => {
            console.log(err);
            Object.values(err.error).forEach( error => {
              this.errorMessage = error[0];
            });
          }
        )
    }

    return false;
  }

  validateNonEmptyFields() {
    if (!this.user.email || 
        !this.user.name ||  
        !this.user.password || 
        !this.password2) {
      this.errorMessage = 'Debes introducir todos los campos.';
      return false;
    }
    else {
      this.errorMessage = '';
      return true;
    }
  }

  areEqualPasswords() {

    if (this.user.password == this.password2) {

      return true;
    }
    else {

      this.errorMessage = 'La contraseña no fue confirmada correctamente. Inténtalo de nuevo.'
      return false;
    }
  }

  removeMessage(){
    this.errorMessage = '';
    this.successMessage = '';
  }

}
