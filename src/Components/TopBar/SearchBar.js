import React from "react";
import styled from "styled-components";
import SearchIcon from "material-ui-icons/Search";

const handleEnter = fn => target => {
  if (target.charCode === 13) fn();
};

const SearchBox = styled.div`
  max-width: 600px;
  background-color: #f5f5f5;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  height: 48px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  color: #616161;
  padding: 10px 10px 10px 28px;
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  onQueryChange = event =>
    this.setState({
      query: event.target.value
    });

  onSubmit = () => {
    this.props.search(this.state.query);
  };

  render() {
    return (
      <SearchBox>
        <StyledSearchIcon />
        <SearchInput
          value={this.state.query}
          onChange={this.onQueryChange}
          onKeyPress={handleEnter(this.onSubmit)}
          placeholder="Search"
        />
      </SearchBox>
    );
  }
}

export default SearchBar;
