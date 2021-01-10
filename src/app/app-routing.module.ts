import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommandComponent } from './command/command.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'command', component: CommandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
