import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './History.css';

const HistoryItems = ({ history }) => {
  const historyElements = history.map((histItem, i) => (
    <li key={i} className={styles.Li}>
      <HistoryItem method={histItem.method} url={histItem.url} />
    </li>
  ));

  return (
    <div className={styles.History}>
      <h2>History</h2>
      <ul>
        {historyElements}
      </ul>
    </div>
  );
};

HistoryItems.propTypes = {
  history: PropTypes.array.isRequired
};

export default HistoryItems;
