import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadMore.module.css';

const LoadMore = ({ onClick }) => (
  <button type="button" onClick={onClick} className={styles.loadMore}>
    Load more
  </button>
);

LoadMore.propTypes = { onClick: PropTypes.func.isRequired };

export default LoadMore;
