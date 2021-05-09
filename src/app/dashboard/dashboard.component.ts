import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [User]
})
export class DashboardComponent implements OnInit {

  constructor(public user:User) { }

  ngOnInit(): void {
  }

}
