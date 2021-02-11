import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private controleService: ControlService) { }

  ngOnInit(): void {
  }

  signin(){
    this.controleService.googleSignin()
  }


}
