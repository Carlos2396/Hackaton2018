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
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { MashRetrieveComponent } from './components/mash/mash-retrieve/mash-retrieve.component';
import { MashListComponent } from './components/mash/mash-list/mash-list.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateSnippetComponent,
    LoginComponent,
    LandingComponent,
    NavbarComponent,
    LogoutComponent,
    UserCreateComponent,
    MashRetrieveComponent,
    MashListComponent
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
