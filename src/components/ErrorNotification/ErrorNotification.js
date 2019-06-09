import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorNotification.module.css';

const ErrorNotification = ({ text }) => (
  <div>
    <h1 className={styles.errorText}>Whoops, something went wrong: {text}</h1>
    <div className={styles.errorIcon}>
      <i className="material-icons">sentiment_very_dissatisfied</i>
    </div>
  </div>
);

ErrorNotification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorNotification;
