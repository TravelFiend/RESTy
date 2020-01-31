import React, { Component } from 'react';
import Form from '../components/forms/Form';
import History from '../components/history/History';
import ResponseField from '../components/response/ResponseField';
import styles from './RESTy.css';

class RESTy extends Component {
  state = {
    url: '',
    username: '',
    password: '',
    token: '',
    json: '',
    method: ''
  }

  handleClick = ({ target }) => {
    return this.setState(prevState => ({
      ...prevState, 
      method: target.name 
    }));
  };
  
  handleChange = ({ target }) => {
    return this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log('OragUTans');
  }

  render() {
    return (
      <div className={styles.Container}>
        <History />
        <div>
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange} onClick={this.handleClick} />
          <ResponseField />
        </div>
      </div>
    );
  }
}

export default RESTy;
