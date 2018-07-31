export class WidgetServiceClient {
  URL = 'http://localhost:8080/api/lesson/LID/widget';
  findWidgetsForLesson(lessonId) {
    return fetch(this.URL.replace('LID', lessonId))
      .then(response => response.json());
  }
}
