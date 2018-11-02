import React  from 'react';
import './style.scss';
import Post from './../../blog/post-1.md';

export default class Layout extends React.Component {
  render() {
    return(
      <div className="page-wrapper">
        <h1>Some blog</h1>
        <div dangerouslySetInnerHTML={{__html: Post.__content}}></div>
        <div>title - <b>{Post.title}</b></div>
        <div>author - <b>{Post.author}</b></div>
      </div>
    );
  }
}
