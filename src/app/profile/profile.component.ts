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
  sections = [];
  update(firstName, lastName, email) {
    this.service
      .updateUser(firstName, lastName, email)
      .then();
  }
  logout() {
    this.service.logout()
      .then(() => {
        this.router.navigate(['login']);
      });
  }
  unenroll(sectionId) {
    this.service1
      .unenrollStudentFromSection(sectionId)
      .then(() => {
        this.loadSections();
      });
  }
  loadSections() {
    this.service1
      .findSectionsForStudent()
      .then(sections => {
        if (sections !== null) {
          this.sections = sections;
        }
      });
  }
  ngOnInit() {
    this.service.profile()
      .then(user => {
        if (user != null) {
          this.user = user;
        }
      });
    this.loadSections();
  }
}
