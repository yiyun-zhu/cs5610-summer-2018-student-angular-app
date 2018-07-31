export class UserServiceClient {

  // LOCAL_URL = 'http://localhost:4000';
  REMOTE_URL = 'https://afternoon-waters-34919.herokuapp.com';
  logout() {
    return fetch(this.REMOTE_URL + '/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }
  login(username, password) {
    const credentials = {username, password};
    return fetch(this.REMOTE_URL + '/api/login', {
      body: JSON.stringify(credentials),
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }})
      .then(response => response.json());
  }
  profile() {
    return fetch(this.REMOTE_URL + '/api/profile', {
      credentials: 'include',
    })
      .then(response => response.json())
      .catch(err => null);
  }
  createUser(username, password) {
    const user = {username, password};
    return fetch(this.REMOTE_URL + '/api/user', {
      body: JSON.stringify(user),
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .catch(err => null);
  }
  updateUser(firstName, lastName, email) {
    const update = {firstName, lastName, email};
    return fetch(this.REMOTE_URL + '/api/profile', {
      body: JSON.stringify(update),
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

}
