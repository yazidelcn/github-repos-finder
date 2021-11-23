import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

//Guards
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);


const routes: Routes = [
  { 
    path:'signin', component:SigninComponent, 
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redirectLoggedInToHome} 
  },
  { path:'signup', component:SignupComponent },

  {
    path:'', component:HomeComponent,
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redirectUnauthorizedToLogin} 
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
