import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Command } from '../models/command.data';
import { Robot } from '../models/robot.data';
import { RobotConfiguration } from '../models/robot-configuration.data';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(private http: HttpClient) { }

  private initRobotUrl:string = environment.backendPrivateUrl+'robot/init';
  private robotListUrl:string = environment.backendPrivateUrl+'robots';


  initRobotConfiguration(robotId:string){
    const url = `${this.initRobotUrl}/${robotId}`;

    return this.http.get<RobotConfiguration>(url);
  }

  getRobotList () {
    return this.http.get<Robot[]>(this.robotListUrl);
  }

  sendCommand (robotId:string, command: Command) {
    this.http.get(`${environment.backendPrivateUrl}/robot/${robotId}/command/${command.direction}`)
      .toPromise()
      .then(result => {
        console.log('From Command Promise:', result);
      });
  }

}
