import React, { Component } from 'react';

class ServerAPI extends Component {

  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    // запрос по url 
    const res = await fetch(`${this._apiBase}${url}`);
    // в случае 404
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, Status ${res.status}`);
    }
    // в случае ок
    return await res.json();
  };

  async getAllHeros() {
    const res = await this.getResource('/people/');
    return res.results;
  }


  getHero(id) { return this.getResource(`/people/${id}`) }

  render() {
    return (
      <div>
        +++
      </div>
    );
  }
}

const getRequest = new ServerAPI();

// get Hero
getRequest.getHero(10).then(body => { console.log(body.name); })

// get All 
getRequest.getAllHeros().then(body => {
  body.forEach((element, index) => {
    console.log(`${index}: ${element.name}`);  
  });
});

export default ServerAPI;