import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class CrudService {

  URL: string;
  headers: HttpHeaders;
  models = {
    USER: "users",
    MASH: "mashes",
    MASH_USER: "mash_user",
    SNIPPET: "snippets",
    ROUND_USER: "round_user",
    ROUND: "rounds",
    INSTRUMENT: "instruments",
    ROUND_SNIPPET: "round_snippet"
};

  constructor(private auth: AuthService, private http: HttpClient) { 
    this.URL = 'http://localhost:8000/api';
    this.headers = new HttpHeaders();
  }

  list(model: string) {
    return this.http.get(
      this.URL + "/" + model,
      { headers: this.headers }
    );
  }

  retrieve(model: string, id: any) {
    return this.http.get(
      this.URL + "/" + model + "/" + id,
      { headers: this.headers }
    );
  }

  registerUser(body:any) {
    return this.http.post(
      this.URL + "/" + this.models.USER,
      body,
      { headers: this.headers }
    );
  }

  create(model: string, body: any) {
    return this.http.post(
      this.URL + "/" + model,
      body,
      { headers: this.headers }
    );
  }

  update(model: string, id: any, body: any) {
    return this.http.put(
      this.URL + "/" + model + "/" + id,
      body,
      { headers: this.headers }
    );
  }

  delete(model: string, id: any) {
    return this.http.delete(
      this.URL + "/" + model + "/" + id,
      { headers: this.headers }
    );
  }
}
