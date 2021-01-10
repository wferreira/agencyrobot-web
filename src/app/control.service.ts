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

  commandUrl = 'command';
  signinUrl = 'signin';

  signin () {
    this.http.post(environment.backendUrl+this.signinUrl, {})
    .toPromise()
    .then(result => {
      window.location.href = result.redirectTo;
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
