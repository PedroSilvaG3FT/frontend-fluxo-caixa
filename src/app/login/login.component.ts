import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isCollapsed = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    console.log("LOGIN");
    this.router.navigate(["home"]);
  }

}
