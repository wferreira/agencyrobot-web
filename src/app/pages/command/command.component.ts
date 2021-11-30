import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Command } from 'src/app/models/command.data';
import { ControlService } from '../../services/control.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent  {
  
  robotId = undefined;

  constructor( private route: ActivatedRoute, private controleService: ControlService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.robotId = params['robotId']; // (+) converts string 'id' to a number
    });
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
