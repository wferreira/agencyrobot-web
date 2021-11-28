import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router:Router) { }

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

      this.authService.googleToken(state, code, authuser, prompt)
      .subscribe((u: User) => {
        this.authService.user = u;
        this.router.navigate(['dashboard']);
      });
    });
  }

}
