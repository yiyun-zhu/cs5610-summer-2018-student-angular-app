export class LessonServiceClient {
  // URL = 'http://localhost:8080/api/module/MID/lesson';
  REMOTE_URL = 'https://arcane-garden-97301.herokuapp.com/api/module/MID/lesson';
  findAllLessonsForModule (moduleId) {
    return fetch(this.REMOTE_URL.replace('MID', moduleId))
      .then(response => response.json());
  }
}
