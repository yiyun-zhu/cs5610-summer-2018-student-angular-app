import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.clients';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private service1: SectionServiceClient,
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
    this.service.profile()
      .then(user => {
        if (user != null) {
          this.user = user;
        }
      });
    this.service1
      .findSectionsForStudent();
  }

}
