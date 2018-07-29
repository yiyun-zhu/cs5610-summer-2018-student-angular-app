export class CourseServiceClient {
  // LOCAL_URL = 'http://localhost:4000/api/course';
  REMOTE_URL = 'https://arcane-garden-97301.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.REMOTE_URL)
      .then(response => response.json());
  }
}
