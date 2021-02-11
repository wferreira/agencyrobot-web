import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private controleService: ControlService) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      let state = params['state'];
      let code = params['code'];
      let authuser = params['authuser'];
      let prompt = params['prompt'];
      
      // console.log(state);
      // console.log(code);
      // console.log(authuser);
      // console.log(prompt);

      this.controleService.googleToken(state, code, authuser, prompt);

    });


  }

}
