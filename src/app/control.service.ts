import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Command } from './command.data';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(private http: HttpClient) { }

  private commandUrl:String = 'command';
  private googleSigninUrl:String = 'google_signin';
  private googleTokenUrl:String = 'google_token';

  googleSignin () {
    this.http.post(environment.backendUrl+this.googleSigninUrl, {})
    .toPromise()
    .then(result => {
      window.location.href = (<any>result).redirectTo;
    });
  }

  googleToken (state:String, code:String, authuser:String, prompt:String) {
    this.http.post(environment.backendUrl+this.googleTokenUrl, {state:state, code:code, authuser:authuser, prompt:prompt})
    .toPromise()
    .then(result => {
      console.log("result"+result);
    });
  }

  sendCommand (command: Command) {
    this.http.get(environment.backendUrl+this.commandUrl+"/"+command.direction)
      .toPromise()
      .then(result => {
        console.log('From Promise:', result);
      });
  }
    
}
