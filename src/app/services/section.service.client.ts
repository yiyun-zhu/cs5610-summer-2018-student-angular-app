export class SectionServiceClient {
  // SECTION_URL = 'http://localhost:4000/api/course/CID/section';
  REMOTE_URL = 'https://afternoon-waters-34919.herokuapp.com';
  SECTION_URL = this.REMOTE_URL + '/api/course/CID/section';
  unenrollStudentFromSection(sectionId) {
    const url = this.REMOTE_URL + '/api/student/section/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
  findSectionsForStudent() {
    const url = this.REMOTE_URL + '/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }
  enrollStudentInSection(sectionId) {
    const url = this.REMOTE_URL + '/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    })
      .then(response => response.json())
      .catch(err => null);
  }
  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('CID', courseId))
      .then(response => response.json());
  }
  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('CID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  removeSection(sectionId) {
    const url = this.REMOTE_URL + '/api/section/' + sectionId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
  updateSection(sectionId, name, seats) {
    const update = {name, seats};
    const url = this.REMOTE_URL + '/api/section/' + sectionId;
    return fetch(url, {
      body: JSON.stringify(update),
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
