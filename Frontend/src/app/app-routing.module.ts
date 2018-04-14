import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/authentication/login/login.component'
import { UserCreateComponent } from './components/user/user-create/user-create.component';
const routes: Routes = [

    // General
    { path:'', component: LoginComponent},
    {path: 'register', component: UserCreateComponent},

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
  })
  export class AppRoutingModule { }