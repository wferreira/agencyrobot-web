import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ControlService } from '../control.service';
import { User } from '../user';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss'],
  providers: [User]
})
export class GoogleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private controleService: ControlService, private router:Router, private user:User) { }

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

      this.controleService.googleToken(state, code, authuser, prompt)
      .subscribe((u: User) => {
        console.log("====>"+u.Name);
        this.user.Name = u.Name;
        this.user.Locale = u.Locale;
        this.user.PictureUrl = u.PictureUrl;
        this.router.navigate(['dashboard']);
      });

    });


  }

}
