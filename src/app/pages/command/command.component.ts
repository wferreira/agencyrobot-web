import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Command } from 'src/app/models/command.data';
import { RobotConfiguration } from 'src/app/models/robot-configuration.data';
import { ControlService } from '../../services/control.service';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent  {
  
  robotId = undefined;
  api = undefined;

  constructor( private route: ActivatedRoute, private controleService: ControlService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.robotId = params['robotId']; // (+) converts string 'id' to a number
    });

    this.controleService.initRobotConfiguration(this.robotId).subscribe((robotConfiguration) => {
      this.initJitsi(robotConfiguration);
    });
  }

  initJitsi(robotConfiguration:RobotConfiguration){
    const domain = '8x8.vc';
    const options = {
      roomName: robotConfiguration.RoomName,
      jwt: robotConfiguration.JitsiToken,
      configOverwrite: { prejoinPageEnabled: false, startWithVideoMuted:false, startWithAudioMuted:false, toolbarButtons:["camera", "microphone", "settings"] }, 
      width: 700,
      height: 700,
      parentNode: document.querySelector('#jitsi-iframe')
    };
    this.api = new JitsiMeetExternalAPI(domain, options);
  }

  forward(){
    this.controleService.sendCommand(this.robotId, { direction: "F" } as Command)
  }

  backward(){
    this.controleService.sendCommand(this.robotId, { direction: "B" } as Command)
  }

  left(){
    this.controleService.sendCommand(this.robotId, { direction: "L" } as Command)
  }

  right(){
    this.controleService.sendCommand(this.robotId, { direction: "R" } as Command)
  }

  stop(){
    this.controleService.sendCommand(this.robotId, { direction: "S" } as Command)
  }
  

}
