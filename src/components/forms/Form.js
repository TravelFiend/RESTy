import React from 'react';
import PropTypes from 'prop-types';
import URLRadios from './URLRadios';
import AuthSection from './AuthSection';
import styles from './Form.css';

const Form = ({ onSubmit, onChange, onClick }) => {
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <URLRadios onClick={onClick} onChange={onChange} />
      <AuthSection onChange={onChange} />
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Form;
