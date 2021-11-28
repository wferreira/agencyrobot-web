import { Component, OnInit } from '@angular/core';
import { Command } from 'src/app/models/command.data';
import { ControlService } from '../../services/control.service';

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
