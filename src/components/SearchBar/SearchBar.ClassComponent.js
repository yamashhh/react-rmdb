import { Component } from 'react';
import searchIcon from '../../images/search-icon.svg';
import { Wrapper, Content } from './SearchBar.styles';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = { value: '' };
  timeout = null;

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      const { setSearchTerm } = this.props;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const { value } = this.state;
        setSearchTerm(value);
      }, 500);
    }
  }

  render() {
    const { value } = this.state;
    return (
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Search Movie"
            onChange={(event) =>
              this.setState({ value: event.currentTarget.value })
            }
            value={value}
          />
        </Content>
      </Wrapper>
    );
  }
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
};
