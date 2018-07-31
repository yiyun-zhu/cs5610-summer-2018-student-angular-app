export class LessonServiceClient {
  URL = 'http://localhost:8080/api/module/MID/lesson';
  findAllLessonsForModule (moduleId) {
    return fetch(this.URL.replace('MID', moduleId))
      .then(response => response.json());
  }
}
