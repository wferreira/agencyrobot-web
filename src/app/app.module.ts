import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CommandComponent } from './command/command.component';
import { GoogleComponent } from './google/google.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { User } from './user';
import { AuthService } from './auth.service';

export function init_app(authService:AuthService) {
  if (authService.isAuthenticated()){
    return () => authService.userInfo()
    .toPromise()
    .then((u: User) => {
      authService.user = u;
    });
  } else{
    return () => new Promise((resolve, reject) => {resolve('done'); });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommandComponent,
    GoogleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AuthService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
