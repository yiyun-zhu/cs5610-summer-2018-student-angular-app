import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private service2: UserServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(
      params => this.loadSection(params.courseId));
  }

  courseId = '';
  sections = [];
  logged = false;
  loadSection(courseId) {
    this.findSectionsForCourse(courseId);
  }
  findSectionsForCourse(courseId) {
    this.service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }
  enroll(section) {
    this.service
      .enrollStudentInSection(section._id)
      .then(response => {
        if (response === null) {
          alert('already enrolled!');
        } else {
          alert('enrolled!');
          this.router.navigate(['profile']);
        }
      });
  }
  ngOnInit() {
    this.service2.profile()
      .then(user => {
        if (user) {
          this.logged = true;
        }
      });
  }
}
