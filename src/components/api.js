import users from '../data/data.json';

class ApiRequest {
  static host = '../data/data.json';

  async getUsers() {
    try {
      return Promise.resolve(users)
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default Api = new ApiRequest;