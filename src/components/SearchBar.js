import React, { Component } from 'react';
import searchIcon from '../img/searchIcon.svg';


class SearchBar extends Component {
    state = {
        isSearching: "",
      }

    handleChange = (e) => {
        this.setState({ isSearching: e.currentTarget.value })
    }

    render() { 
        let { isSearching } = this.state;
        console.log(isSearching);
        return (
            <>
                <div className="searchBarContainer flex">
                    <input type="input" 
                            value={isSearching}
                            className="searchBar" 
                            placeholder="Search here"
                            onChange={ this.handleChange }
                            />
                    <img src={searchIcon} className="searchIcon" alt="search icon" /> 
                </div>
                <div style={{ display: isSearching? "block" : "none" }}
                     className="searchResults">SEARCHING RESULT</div>
            </>
          );
    }
}
 
export default SearchBar;
