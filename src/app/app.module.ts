import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { CommandComponent } from './pages/command/command.component';
import { GoogleComponent } from './pages/google/google.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { User } from './models/user';
import { AuthService } from './services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppHeaderComponent } from './layouts/app-header/app-header.component';

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
    DashboardComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AuthService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
