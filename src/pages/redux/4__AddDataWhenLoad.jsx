// add some data to state by action and maping this new data
import React from 'react';
import { connect } from 'react-redux';

// 1. Подключаем нужные экшены
import { moviesList, directorsList } from './../../store/actions';
import { bindActionCreators } from 'redux';

class ActionTest extends React.Component {

  // 1. Запускаем определённый экшн (по названию) перед рендерингом
  // Этот экшн передаст новые данные state через reducers
  componentWillMount() {
    this.props.moviesList();
    this.props.directorsList();
    // may use to fetch data from store when app load
  }

  render() {
    console.log(this.props);
    const { movies, directors } = this.props;
    return (
      <div style={{ marginTop: 50, color: 'maroon' }}>
        <h3>Redux-list</h3>
        <ul>
          {movies ? movies.map((item, index) => <li key={index}>{item.name}</li>) : null}
          {directors ? directors.map((item, index) => <li key={index}>{item.name}</li>) : null}
        </ul>
      </div>
    );
  }
}

// username берётся из state и передаётся в props компонента
const mapStateToProps = state => {
  return {
    movies: state.movies, // и можно получить данные, которых изначально не было в state, а которые создал экшн
    directors: state.directors, // и можно получить данные, которых изначально не было в state, а которые создал экшн
  };
};

const mapDispatchToProps = (dispatch) => {
  // все вместе диспатчатся
  return bindActionCreators({ moviesList, directorsList }, dispatch);

  // диспатч отдельности
  // return {
  // moviesList:    () => dispatch(moviesList()),
  // directorsList: () => dispatch(directorsList()),
  // };
};

// подключение state во внутрь компонента
export default connect(mapStateToProps, mapDispatchToProps)(ActionTest);

