import React, { Component } from 'react';
import Helmet from 'react-helmet';
import FormsTemplate from '../../components/FormsTemplate';
import './style.scss';

class Form2 extends Component {

  state = {
    formData: {
      name: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Name',
        config: {
          name: 'name_input',
          text: 'text',
          placeholder: 'Enter your name'
        }
      },
      lastname: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Last',
        config: {
          name: 'lastname_input',
          text: 'text',
          placeholder: 'Enter your lastname'
        }
      },
    }
  }
  submitForm = () => {

  }

  render() {
    return (
      <main className="form2">
        <Helmet title='Form page 2' />
        <h1>Form page 2</h1>
        <form onSubmit={this.submitForm}>
          <FormsTemplate formData={this.state.formData} />
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }
};

export default Form2;
