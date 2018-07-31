export class WidgetServiceClient {
  // URL = 'http://localhost:8080/api/lesson/LID/widget';
  REMOTE_URL = 'https://arcane-garden-97301.herokuapp.com/api/lesson/LID/widget';
  findWidgetsForLesson(lessonId) {
    return fetch(this.REMOTE_URL.replace('LID', lessonId))
      .then(response => response.json());
  }
}
