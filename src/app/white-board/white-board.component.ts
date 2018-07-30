import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.clients';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private service: UserServiceClient) { }

  user = '';
  courses = [];
  ngOnInit() {
    this.service
      .profile()
      .then(user => {
          if (user) {
            this.user = user;
          }
       });
  }

}
