import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './style.scss';

class Form extends Component {
  // Controlled aproach
  state = {
    name: '',
    lastname: '',
  }

  handleNameChange     = (e) => this.setState({ name: e.target.value });
  handleLastnameChange = (e) => this.setState({ lastname: e.target.value });
  handleSubmitClick    = (e) => {
    e.preventDefault();
    console.log(this.state);
  }


  // Uncontrolled aproach (not need state)
  handleSubmitClick2 = (e) => {
    e.preventDefault();
    const values = {
      name:     this.name.value,
      lastname: this.lastname.value
    };
    console.log(values);
  }

  render() {
    return(
      <main className="form">
        <Helmet title='Form page' />
        <h1>Form page</h1>

        <h2>Controlled aproach</h2> {/* with state + setState when typing */}
        <form>
          <div>
            <label htmlFor="name">Enter Name</label>
            <input
              value={this.state.name}
              onChange={this.handleNameChange}
              type="text"
              placeholder="Name"
              id="name" />
          </div>
          <div>
            <label htmlFor="lastname">Enter Lastname</label>
            <input
              value={this.state.lastname}
              onChange={this.handleLastnameChange}
              type="text"
              placeholder="Lastname"
              id="lastname" />
          </div>
          <button
            onClick={this.handleSubmitClick}
            type="submit">
            Submit
          </button>
        </form>


        <h2 style={{marginTop: 35}}>Uncontrolled aproach</h2>
        <form>
          <div>
            <label htmlFor="name2">Enter Name</label>
            <input
              ref={input => this.name = input}
              type="text"
              placeholder="Name"
              id="name2" />
          </div>
          <div>
            <label htmlFor="lastname2">Enter Lastname</label>
            <input
              ref={input => this.lastname = input}
              type="text"
              placeholder="Lastname"
              id="lastname2" />
          </div>
          <button
            onClick={this.handleSubmitClick2}
            type="submit">
            Submit
          </button>
        </form>

      </main>
    );
  }
};

export default Form;