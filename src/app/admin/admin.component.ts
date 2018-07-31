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
              private service2: SectionServiceClient) { }

  courses = [];
  sections = [];
  selectedCourseId;
  sectionName = '';
  seats = '';
  createSection() {
    this.service2
      .createSection(
        this.selectedCourseId,
        this.sectionName,
        this.seats)
      .then(() => {
        this.findSectionsForCourse(this.selectedCourseId);
      });
  }
  findSectionsForCourse(courseId) {
    this.selectedCourseId = courseId;
    this.service2
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }
  removeSection(sectionId) {
    this.service2.removeSection(sectionId)
      .then(() => {
        this.findSectionsForCourse(this.selectedCourseId);
      });
  }
  selectSection(section) {
    this.sectionName = section.name;
    this.seats = section.seats;
  }
  editSection(sectionId, name, seats) {
    this.service2.
      updateSection(sectionId, name, seats)
      .then(() =>
      this.findSectionsForCourse(this.selectedCourseId));
  }
  ngOnInit() {
    this.service1
      .findAllCourses()
      .then(courses => this.courses = courses);
  }
}
