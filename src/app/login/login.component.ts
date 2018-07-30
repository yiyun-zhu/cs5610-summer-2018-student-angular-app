import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) { }
  username = '';
  password = '';
  login(username, password) {
    this.service
      .login(username, password)
      .then(response => {
        if (response === null) {
          alert('username or password incorrect!');
        } else {
          this.router.navigate(['profile']);
        }
      });
  }
  ngOnInit() {
  }

}
