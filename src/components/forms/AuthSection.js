import React from 'react';
import PropTypes from 'prop-types';

const AuthSection = ({ onChange }) => (
  <div>
    <button>Headers</button>
    <p>Basic Authorization</p>
    <div>
      <input type="text" onChange={onChange} placeholder="Username"></input>
      <input type="text" onChange={onChange} placeholder="Password"></input>
    </div>
    <p>Bearer Token</p>
    <input type="text" onChange={onChange} placeholder="Bearer Token"></input>
  </div>
);

AuthSection.propTypes = { onChange: PropTypes.func.isRequired };

export default AuthSection;
