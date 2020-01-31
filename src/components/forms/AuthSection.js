import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthSection.css';

const AuthSection = ({ onChange }) => (
  <div className={styles.Auth}>
    <button className={styles.Stretch}>Headers</button>
    <p>Basic Authorization</p>
    <div>
      <input type="text" onChange={onChange} placeholder="Username"></input>
      <input type="text" onChange={onChange} placeholder="Password"></input>
    </div>
    <p>Bearer Token</p>
    <input className={styles.Stretch} type="text" onChange={onChange} placeholder="Bearer Token"></input>
  </div>
);

AuthSection.propTypes = { onChange: PropTypes.func.isRequired };

export default AuthSection;
