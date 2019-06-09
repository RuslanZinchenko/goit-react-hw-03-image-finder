import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';
import styles from './Gallery.module.css';

const Gallery = ({ items, onOpenModal }) => (
  <ul className={styles.gallery}>
    {items.map(item => (
      <li className={styles.galleryItem} key={item.id}>
        <GalleryItem {...item} />
        <button
          type="button"
          className={styles.fullscreenButton}
          onClick={() => onOpenModal(item.id)}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default Gallery;
