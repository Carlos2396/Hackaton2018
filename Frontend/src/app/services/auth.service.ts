import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {
  URL: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.URL = 'http://10.50.116.130:8000/api';
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  // Make the post request with the id and password provided, if successful, sets session data
  login(id: string, password: string) {
    let body = {
      email: id,
      password: password
    }

    return this.http.post(
      this.URL + '/login',
      body,
      { headers: this.headers }
    );
  }

  // Sets session data with the login response
  setSession(res) {
    localStorage.setItem('user', JSON.stringify(res));
  }

  // Delete session data
  logout() {
    let hola = localStorage.removeItem('user');
  }

  // Returns true if the the token exists and has not expired
  isLoggedIn() {
    return !(this.getUser() === null);
  }

  // get the logged in member
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
