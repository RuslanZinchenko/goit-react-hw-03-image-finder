import React from 'react';
import PropTypes from 'prop-types';
import styles from './GalleryItem.module.css';

const GalleryItem = ({ webformatURL, likes, views, comments, downloads }) => (
  <div>
    <img src={webformatURL} alt="img" />
    <div className={styles.stats}>
      <p className={styles.statsItem}>
        <i className="material-icons">thumb_up</i>
        {likes}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">visibility</i>
        {views}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">comment</i>
        {comments}
      </p>
      <p className={styles.statsItem}>
        <i className="material-icons">cloud_download</i>
        {downloads}
      </p>
    </div>
  </div>
);
GalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};

export default GalleryItem;
