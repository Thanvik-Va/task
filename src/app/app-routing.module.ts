import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutusComponentComponent } from './components/aboutus-component/aboutus-component.component';
import { ContactComponent } from './components/contact/contact.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FolderCardsComponent } from './components/folder-cards/folder-cards.component';
import { LoginForm2Component } from './components/login-form2/login-form2.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';
import { WelcomeHomeComponent } from './components/welcome-home/welcome-home.component';
// import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

  {path:'',component:HomeComponent,pathMatch:'full'},
  {path: 'login',component:LoginComponent,pathMatch:'full'},
  {path: 'forgot-password',component:ForgotPasswordComponent,pathMatch:'full'},

  {path:'dashboard',component:DashboardComponent,pathMatch:'full'},
  {path: 'aboutus',component:AboutusComponentComponent,pathMatch:'full'},
  {path: 'contact',component:ContactComponent,pathMatch:'full'},
  {path: 'folder-cards',component:FolderCardsComponent,pathMatch:'full'},
  {path: 'login-form2',component:LoginForm2Component,pathMatch:'full'},
  {path:  'slide-bar',component:SlideBarComponent,pathMatch:'full'},
  {path: 'welcome-home',component:WelcomeHomeComponent,pathMatch:'full'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
