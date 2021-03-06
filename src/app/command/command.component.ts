import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';
import { Command } from '../command.data';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent  {
  
  constructor(private controleService: ControlService) {}

  ngOnInit(): void {
  }

  forward(){
    this.controleService.sendCommand({ direction: "F" } as Command)
  }

  backward(){
    this.controleService.sendCommand({ direction: "B" } as Command)
  }

  left(){
    this.controleService.sendCommand({ direction: "L" } as Command)
  }

  right(){
    this.controleService.sendCommand({ direction: "R" } as Command)
  }

  stop(){
    this.controleService.sendCommand({ direction: "S" } as Command)
  }

}
