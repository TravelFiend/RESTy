import React from 'react';
import PropTypes from 'prop-types';
import URLRadios from './URLRadios';
import AuthSection from './AuthSection';
import styles from './Form.css';

const Form = ({ onSubmit, onChange, onClick }) => {
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <section>
        <input name="url" className={styles.URL} onChange={onChange} placeholder="URL"></input>
        <URLRadios onClick={onClick} />
      </section>

      <section className={styles.Bottom}>
        <textarea name="json" onChange={onChange} placeholder="Raw JSON Body"></textarea>
        <AuthSection onChange={onChange} />
      </section>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Form;
