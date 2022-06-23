import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className="search-box"
        placeholder="Search monster"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
