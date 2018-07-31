import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private service1: SectionServiceClient) { }

  username = null;
  sections = [];
  ngOnInit() {
    this.service
      .profile()
      .then(user => {
          if (user) {
            this.username = user.username;
          }
       });
    this.service1
      .findSectionsForStudent()
      .then(
        sections => this.sections = sections);
  }
}
