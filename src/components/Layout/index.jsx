import React  from 'react';
import './style.scss';
import Post_1 from './../../blog/post-1.md';
import Post_2 from './../../blog/post-2.md';
import Post_3 from './../../blog/post-3.md';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Post1 = () => (
  <article>
    <div dangerouslySetInnerHTML={{ __html: Post_1.__content }}></div>
    <div>title - <b>{Post_1.title}</b></div>
    <div>author - <b>{Post_1.author}</b></div>
  </article>
);
const Post2 = () => (
  <article>
    <div dangerouslySetInnerHTML={{ __html: Post_2.__content }}></div>
    <div>title - <b>{Post_2.title}</b></div>
    <div>author - <b>{Post_2.author}</b></div>
  </article>
);
const Post3 = () => (
  <article>
    <div dangerouslySetInnerHTML={{ __html: Post_3.__content }}></div>
    <div>title - <b>{Post_3.title}</b></div>
    <div>author - <b>{Post_3.author}</b></div>
  </article>
);

export default class Layout extends React.Component {
  render() {
    return(
      <Router>
        <div className="page-wrapper">
          <header>
            HEADER
          </header>
          <main>
            <nav>
              <Link to="/">Post-1</Link>
              <Link to="/post2">Post-2</Link>
              <Link to="/post3">Post-3</Link>
            </nav>
            <Route exact path="/" component={Post1}/>
            <Route path="/post2" component={Post2}/>
            <Route path="/post3" component={Post3}/>
          </main>
          {/* <Router>

  </Router> */}
          <footer>FOOTER</footer>
        </div>
      </Router>
    );
  }
}
