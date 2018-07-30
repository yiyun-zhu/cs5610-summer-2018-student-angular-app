import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service1: CourseServiceClient,
              private service2: SectionServiceClient,
              private service3: UserServiceClient) { }

  courses = [];
  sections = [];
  currentCourse;
  sectionName = '';
  seats = '';
  createSection() {
    this.service2
      .createSection(
        this.currentCourse.id,
        this.sectionName,
        this.seats)
      .then(() => {
        this.findSectionsForCourse(this.currentCourse);
      });
  }
  findSectionsForCourse(course) {
    this.currentCourse = course;
    this.service2
      .findSectionsForCourse(course.id)
      .then(sections => this.sections = sections);
  }
  ngOnInit() {
    this.service1
      .findAllCourses()
      .then(courses => this.courses = courses);
  }
}
