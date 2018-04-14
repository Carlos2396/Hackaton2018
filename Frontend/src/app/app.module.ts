//External Imports and routing
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Services imports
import { AuthService } from './services/auth.service';

//Components imports
import { AppComponent } from './app.component';
import { CreateSnippetComponent } from './components/snippet/create-snippet/create-snippet.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateSnippetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
