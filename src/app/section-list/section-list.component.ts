import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private service1: CourseServiceClient,
              private service2: UserServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.loadSection(params.courseId));
  }

  // course;
  courseId = '';
  sections = [];
  logged = false;
  loadSection(courseId) {
    this.courseId = courseId;
    this.findSectionsForCourse(courseId);
  }
  findSectionsForCourse(courseId) {
    this.service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }
  enroll(section) {
    // console.log(section);
    this.service
      .enrollStudentInSection(section._id)
      .then(response => {
        if (response === null) {
          alert('already enrolled!');
        } else {
          alert('enrolled!');
        }
      });
  }
  ngOnInit() {
    // this.service1
    //   .findCourseById(this.courseId)
    //   .then(course => this.course = course);
    this.service2.profile()
      .then(user => {
        if (user) {
          this.logged = true;
        }
      });
  }
}
