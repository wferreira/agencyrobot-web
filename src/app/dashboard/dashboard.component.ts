import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authService:AuthService, private controlService:ControlService) { }

  ngOnInit(): void {
    this.controlService.getRobotList();
  }

}
