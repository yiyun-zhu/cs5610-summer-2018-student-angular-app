export class CourseServiceClient {
  LOCAL_URL = 'http://localhost:8080/api/course';
  REMOTE_URL = 'https://arcane-garden-97301.herokuapp.com/api/course';
  findCourseById(courseId) {
    return fetch(this.LOCAL_URL + '/' + courseId)
      .then(response => response.json());
  }
  findAllCourses() {
    return fetch(this.LOCAL_URL)
      .then(response => response.json());
  }
}
