import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url }) => (
  <>
    <h3>{method}</h3>
    <p>{url}</p>
  </>
);

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default HistoryItem;
