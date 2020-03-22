import React from 'react';
import PropTypes from 'prop-types';
import styles from './URLRadios.css';

const URLRadios = ({ onClick, onChange }) => (  
  <section>
    <input name="url" type="text" className={styles.URL} onChange={onChange} placeholder="URL"></input>
    <div className={styles.URLRadios}>
      <div>
        <label htmlFor="get">GET</label>
        <label htmlFor="post">POST</label>
        <label htmlFor="put">PUT</label>
        <label htmlFor="patch">PATCH</label>
        <label htmlFor="delete">DELETE</label>
      </div>

      <div className={styles.Radios}>
        <input name="GET" type="radio" onClick={onClick} id="get" />
        <input name="POST" type="radio" onClick={onClick} id="post" />
        <input name="PUT" type="radio" onClick={onClick} id="put" />
        <input name="PATCH " type="radio" onClick={onClick} id="patch" />
        <input name="DELETE" type="radio" onClick={onClick} id="delete" />
      </div>
      <button>Go!</button>
    </div>
  </section>
);

URLRadios.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default URLRadios;
