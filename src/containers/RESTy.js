import React, { Component } from 'react';
import Form from '../components/forms/Form';
import HistoryItems from '../components/history/HistoryItems';
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
    response: [],
    requests: []
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
    return this.setState(prevState => ({
      ...prevState,
      requests: [...prevState.requests, { method: this.state.method, url: this.state.url }]
    }));
  }

  render() {
    return (
      <div className={styles.Container}>
        <HistoryItems history={this.state.requests} />
        <div>
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange} onClick={this.handleClick} response={this.response} />
          <ResponseField response={this.state.response} />
        </div>
      </div>
    );
  }
}

export default RESTy;
