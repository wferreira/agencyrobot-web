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

  sendCommand (command: Command) {
    this.http.get(environment.backendUrl+this.commandUrl+"/"+command.direction)
    .subscribe(res => {console.log(res)});
  }
    
}
