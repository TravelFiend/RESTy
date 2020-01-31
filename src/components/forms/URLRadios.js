import React from 'react';
import PropTypes from 'prop-types';
import styles from './URLRadios.css';

const URLRadios = ({ onClick }) => (
  <div className={styles.URLRadios}>
    <div>
      <label htmlFor="get">GET</label>
      <label htmlFor="post">POST</label>
      <label htmlFor="put">PUT</label>
      <label htmlFor="patch">PATCH</label>
      <label htmlFor="delete">DELETE</label>
    </div>

    <div className={styles.Radios}>
      <input name="get" type="radio" onClick={onClick} id="get" />
      <input name="post" type="radio" onClick={onClick} id="post" />
      <input name="put" type="radio" onClick={onClick} id="put" />
      <input name="patch" type="radio" onClick={onClick} id="patch" />
      <input name="delete" type="radio" onClick={onClick} id="delete" />
    </div>
    <button>Go!</button>
  </div>
);

URLRadios.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default URLRadios;
