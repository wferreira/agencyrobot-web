import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommandComponent } from './command/command.component';
import { GoogleComponent } from './google/google.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'google', component: GoogleComponent },
  { path: 'command', component: CommandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
