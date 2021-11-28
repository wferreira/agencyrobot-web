import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CommandComponent } from './pages/command/command.component';
import { GoogleComponent } from './pages/google/google.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'google', component: GoogleComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'command', component: CommandComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
