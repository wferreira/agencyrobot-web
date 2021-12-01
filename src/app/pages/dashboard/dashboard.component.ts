import { Component, OnInit } from '@angular/core';
import { Robot } from 'src/app/models/robot.data';
import { ControlService } from '../../services/control.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private controlService:ControlService) { }

  robots:Robot[];

  ngOnInit(): void {
    this.controlService.getRobotList().subscribe((robots) =>  {
      this.robots = robots;
    });
  }

}
