export class ModuleServiceClient {
  // URL = 'http://localhost:8080/api/course/CID/module';
  REMOTE_URL = 'https://arcane-garden-97301.herokuapp.com/api/course/CID/module';
  findAllModulesForCourse (courseId) {
    return fetch(this.REMOTE_URL.replace('CID', courseId))
      .then(response => response.json());
  }
}
