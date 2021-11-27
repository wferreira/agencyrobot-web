import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user:User;
  
  private googleSigninUrl:String = 'google_signin';
  private googleTokenUrl:String = 'google_token';
  private userInfoUrl:String = 'user/infos'

  constructor(private cookieService:CookieService, private http: HttpClient) { }

  public get user():User{
    return this._user;
  }

  public set user(user:User){
    this._user = user;
  }

  public isAuthenticated(): boolean {
    return this.cookieService.check('mysession');
  }

  googleSignin () {
    this.http.post(environment.backendUrl+this.googleSigninUrl, {})
    .toPromise()
    .then(result => {
      window.location.href = (<any>result).redirectTo;
    });
  }

  googleToken (state:String, code:String, authuser:String, prompt:String) {
    return this.http.post<User>(environment.backendUrl+this.googleTokenUrl, {state:state, code:code, authuser:authuser, prompt:prompt});
  }

  userInfo () {
    return this.http.get<User>(environment.backendPrivateUrl+this.userInfoUrl);
  }

}
