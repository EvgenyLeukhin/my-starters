import React, { Component } from 'react';

// API
class ServerAPI extends Component {

  _apiBase = 'https://swapi.co/api';

  // шаблон запросов
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
}


// Компонент, использующий API
class Example extends Component {
  // инициализация API в компоненте
  API = new ServerAPI();

  state = {
    loading: true, 
    name: null,
    height: null,
    mass: null,
    hair_color: null,
  }

  // делать запрос сразу при инициализации 
  constructor() {
    super();
    this.getDataToComponent();
  }

  // Функция при ошибке ответа с сервера
  onError = () => { alert('Page Not Found'); }

  // функция запрос данных
  getDataToComponent = () => {
    this.setState({loading: true})
    
    const id = Math.floor(Math.random() * 15 + 1);
    // const id = 150;
    this.API
      .getHero(id)
      .then(heroObj => {
        this.setState({
          loading: false,
          name: heroObj.name,
          height: heroObj.height,
          mass: heroObj.mass,
          hair_color: heroObj.hair_color,
        })
      })
      // запустит обработчик ошибок, если не загрузятся даные
      .catch(this.onError)
  }


  render() {
    const {loading, name, height, mass, hair_color} = this.state;

    return (
      <div>
        <button 
          style={{ background: 'tomato', cursor: 'pointer' }}
          onClick={this.getDataToComponent}>
          Get data from server
        </button>

        {
          loading ? 
            <p>Loading ... </p> : 

            <React.Fragment>
              <p>Name:       <b>{name}</b></p>
              <p>Height:     <b>{height}</b></p>
              <p>Mass:       <b>{mass}</b></p>
              <p>Hair color: <b>{hair_color}</b></p>
            </React.Fragment> 
        }
      </div>
    )
  }
}

export default Example;