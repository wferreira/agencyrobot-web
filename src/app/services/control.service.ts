import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Command } from '../models/command.data';
import { Robot } from '../models/robot.data';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(private http: HttpClient) { }

  private commandUrl:String = 'command';
  private robotListUrl:String = 'robots';

  sendCommand (robotId:String, command: Command) {
    this.http.get(environment.backendPrivateUrl+this.commandUrl+"/"+robotId+"/"+command.direction)
      .toPromise()
      .then(result => {
        console.log('From Command Promise:', result);
      });
  }
    
  getRobotList () {
    return this.http.get<Robot[]>(environment.backendPrivateUrl+this.robotListUrl);
  }

}
