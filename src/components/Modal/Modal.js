/* eslint-disable */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onfindID: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    const { onClose } = this.props;
    onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    if (current && e.target !== current) {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { onfindID, onChange } = this.props;
    return (
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.modal}>
          <div>
            <img src={onfindID.largeImageURL} alt="img" />
            <button
              type="button"
              className={styles.closeModal}
              onClick={onChange}
            >
              <i className="material-icons" style={{ color: 'white' }}>
                clear
              </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
