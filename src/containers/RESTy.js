import React, { Component } from 'react';
import Form from '../components/forms/Form';
import ResponseField from '../components/response/ResponseField';

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
      <>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange} onClick={this.handleClick} />
        <ResponseField />
      </>
    );
  }
}

export default RESTy;
