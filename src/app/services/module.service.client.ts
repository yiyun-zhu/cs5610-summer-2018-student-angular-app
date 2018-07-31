export class ModuleServiceClient {
  URL = 'http://localhost:8080/api/course/CID/module';
  findAllModulesForCourse (courseId) {
    return fetch(this.URL.replace('CID', courseId))
      .then(response => response.json());
  }
}
