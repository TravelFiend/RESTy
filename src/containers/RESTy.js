import React, { Component } from 'react';
import Form from '../components/forms/Form';
import History from '../components/history/History';
import ResponseField from '../components/response/ResponseField';
import styles from './RESTy.css';

class RESTy extends Component {
  handleClick = () => console.log('BluEbErrIeS');
  
  handleChange = () => {
    console.log('ChiCkEn oF the SeA');
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
