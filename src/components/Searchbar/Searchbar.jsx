import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { ReactComponent as SearchIcon } from '../../images/search.svg';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChangeSearch = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      alert('Enter your query');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            {/* <svg className="SearchForm__icon" width="32" height="32">
              <use href="./"></use>
            </svg> */}
            {/* <SvgIcon component={SearchIcon} inheritViewBox /> */}
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeSearch}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
