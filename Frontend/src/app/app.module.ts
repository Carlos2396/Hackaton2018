//External Imports and routing
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Services imports
import { AuthService } from './services/auth.service';
import { CrudService } from './services/crud.service';

//Components imports
import { AppComponent } from './app.component';
import { CreateSnippetComponent } from './components/snippet/create-snippet/create-snippet.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateSnippetComponent,
    LoginComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
