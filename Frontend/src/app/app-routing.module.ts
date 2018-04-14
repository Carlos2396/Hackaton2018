import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SnippetCreateComponent } from './components/snippet/snippet-create/snippet-create.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { MashRetrieveComponent } from './components/mash/mash-retrieve/mash-retrieve.component';
import { MashCreateComponent } from './components/mash/mash-create/mash-create.component';
import { MashSnippetCreateComponent } from './components/mash-snippet/mash-snippet-create/mash-snippet-create.component';
import { MashListComponent } from './components/mash/mash-list/mash-list.component';
import { SnippetListComponent } from './components/snippet/snippet-list/snippet-list.component';

const routes: Routes = [

  // General
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserCreateComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },



  //Snippets
  { path: 'snippets/create', component: SnippetCreateComponent, canActivate: [AuthGuard] },
  { path: 'snippets', component: SnippetListComponent, canActivate: [AuthGuard] },

  //Mash

  { path: 'mash/create', component: MashCreateComponent, canActivate: [AuthGuard] },
  { path: 'mash', component: MashListComponent, canActivate: [AuthGuard] },
  { path: 'mash/:id', component: MashRetrieveComponent, canActivate: [AuthGuard] },

  //Mash-snippet
  { path: 'mash/:route_id/snippet', component: MashSnippetCreateComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }