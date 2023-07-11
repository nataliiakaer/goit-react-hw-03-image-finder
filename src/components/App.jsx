import React, { Component } from 'react';
import Searchbar from './Searchbar';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    PER_PAGE: 12,
  };

  handleFormSubmit = searchName => {
    this.setState({ searchQuery: searchName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </>
    );
  }
}
