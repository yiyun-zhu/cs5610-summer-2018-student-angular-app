export class UserServiceClient {

  // URL = 'http://localhost:4000/api/';
  logout() {
    return fetch('http://localhost:4000/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }
  login(username, password) {
    const credentials = {username, password};
    return fetch('http://localhost:4000/api/login', {
      body: JSON.stringify(credentials),
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }})
      .then(response => response.json());
  }
  profile() {
    return fetch('http://localhost:4000/api/profile', {
      credentials: 'include',
    })
      .then(response => response.json())
      .catch(err => null);
  }
  createUser(username, password) {
    const user = {username, password};
    return fetch('http://localhost:4000/api/user', {
      body: JSON.stringify(user),
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

}
