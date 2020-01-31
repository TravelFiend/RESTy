import React, { Component } from 'react';
import Form from '../components/forms/Form';
import History from '../components/history/History';
import ResponseField from '../components/response/ResponseField';
import styles from './RESTy.css';
import getResponse from '../services/getResponse';

class RESTy extends Component {
  state = {
    url: '',
    username: '',
    password: '',
    token: '',
    json: '',
    method: '',
    response: ''
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

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    return getResponse(this.state.url)
      .then(response => this.setState({ response }));
  }

  handleSubmit = event => {
    event.preventDefault();

    this.fetch();
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
