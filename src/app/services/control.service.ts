import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Command } from '../models/command.data';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(private http: HttpClient) { }

  private commandUrl:String = 'command';
  private robotListUrl:String = 'robots';

  sendCommand (command: Command) {
    this.http.get(environment.backendUrl+this.commandUrl+"/"+command.direction)
      .toPromise()
      .then(result => {
        console.log('From Command Promise:', result);
      });
  }
    
  getRobotList () {
    this.http.get(environment.backendPrivateUrl+this.robotListUrl)
      .toPromise()
      .then(result => {
        console.log('From Robot List Promise:', result);
      });
  }

}
