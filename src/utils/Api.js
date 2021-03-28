class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  search(queryRequet) {
    console.log(queryRequet);
  }

  handleRandomQuery() {
    return fetch(`${this._baseUrl}/random.php`)
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
  }
}

const config = {
  baseUrl: 'https://www.themealdb.com/api/json/v1/1',
  apiKey: '1'
}

const api = new Api(config);

export default api;
