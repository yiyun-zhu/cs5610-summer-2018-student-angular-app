import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) { }

  username = '';
  password = '';
  password2 = '';
  register(username, password, password2) {
    if (password !== password2) {
      alert('password not consistent!');
      this.password = '';
      this.password2 = '';
    } else {
      this.service
        .createUser(username, password)
        .then(response => {
          // console.log(user);
          if (response === null) {
            alert('username already exists!');
          } else {
            this.router.navigate(['profile']);
          }
        });
    }
  }
  ngOnInit() {
  }

}
