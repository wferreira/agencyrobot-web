import { Component } from '@angular/core';
import { ControlService } from './control.service';
import { Command } from './command.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agencyrobot-web';

  constructor(private controleService: ControlService) {}

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
