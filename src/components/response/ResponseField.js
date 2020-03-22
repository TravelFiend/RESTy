import React from 'react';
import PropTypes from 'prop-types';
import styles from './Response.css';
import ReactJson from 'react-json-view';

const ResponseField = ({ response }) => {
  return (
    <section className={styles.ShowResult}>
      <ReactJson src={response} />
    </section>
  );
};

ResponseField.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default ResponseField;
