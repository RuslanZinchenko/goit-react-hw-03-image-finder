import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleQueryChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;
    onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          value={query}
          placeholder="Search images..."
          onChange={this.handleQueryChange}
        />
      </form>
    );
  }
}
