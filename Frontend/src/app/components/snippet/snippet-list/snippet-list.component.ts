import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { Snippet } from '../../../models/snippet.model';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-snippet-list',
  templateUrl: './snippet-list.component.html',
  styleUrls: ['./snippet-list.component.css']
})
export class SnippetListComponent implements OnInit {
  message: string;
  user: User;
  snippets: Snippet[];

  constructor(private crud:CrudService, private auth:AuthService) { }

  ngOnInit() {
    this.message = "";
    let user_id = this.auth.getUser().id;
    this.crud.retrieve(this.crud.models.USER, user_id)
    .subscribe(
      (res: User) => {
        console.log(res);
        this.user = res;
        this.snippets = res.snippets;
        this.snippets.forEach(snippet => {
          this.crud.retrieve(this.crud.models.SNIPPET, snippet.id)
          .subscribe(
            (data:Snippet) => {
              snippet.instrument = data.instrument;
            }
          )
        });
      },
      err => {
        Object.values(err.error).forEach( error => {
          this.message = error[0];
        });
      }
    );
  }
}
