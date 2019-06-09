import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import Gallery from './Gallery/Gallery';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import SearchForm from './SearchForm/SearchForm';
import Modal from './Modal/Modal';
import LoadMore from './LoadMore/LoadMore';
import * as ArticleAPI from '../services/article-api';
import styles from '../styles.css';

const spinnerStyles = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    isOpen: false,
    selectedId: null,
    pageNumber: 1,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { articles } = this.state;
    if (prevState.articles === articles) return;
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  fetchArticles = (query, pageNumber) => {
    this.setState({ isLoading: true, query, pageNumber });

    ArticleAPI.fetchArticles(query, pageNumber)
      .then(({ data }) => this.setState({ articles: data.hits, pageNumber: 2 }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleOpenModal = id => {
    this.setState({
      isOpen: true,
      selectedId: id,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isOpen: false,
      selectedId: null,
    });
  };

  handleLoadMore = () => {
    this.setState({ isLoading: true });
    const { query, pageNumber } = this.state;

    ArticleAPI.fetchArticles(query, pageNumber)
      .then(({ data }) => {
        this.setState(state => ({
          articles: [...state.articles, ...data.hits],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error, isOpen, selectedId } = this.state;
    const findID = articles.find(t => t.id === selectedId);

    return (
      <div className={styles.app}>
        <SearchForm onSubmit={this.fetchArticles} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && (
          <Spinner
            name="line-spin-fade-loader"
            color="steelblue"
            fadeIn="none"
            style={spinnerStyles}
          />
        )}
        {articles.length > 0 && (
          <div>
            <Gallery items={articles} onOpenModal={this.handleOpenModal} />
            <LoadMore onClick={this.handleLoadMore} />
          </div>
        )}
        {isOpen && (
          <Modal
            onClose={this.handleCloseModal}
            onfindID={findID}
            onChange={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
