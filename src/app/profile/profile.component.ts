import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.clients';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) { }
  user = new User();
  update() {
  }
  logout() {
    this.service.logout()
      .then(() => {
        this.router.navigate(['login']);
      });
  }
  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        if (user != null) {
          this.user = user;
        }
      });
  }

}
