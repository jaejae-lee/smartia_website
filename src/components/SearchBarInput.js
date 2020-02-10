import React, { Component } from 'react';
import { Motion, spring, StaggeredMotion, presets } from 'react-motion';
import SearchResultBar from './SearchResultBar';
import searchIcon from '../img/searchIcon.svg';
  
  class SearchBarInput extends Component {
    constructor(props) {
      super(props);
      this.count = 0;
      this.toggleNotificationBar = this.toggleNotificationBar.bind(this);
    }
  
    toggleNotificationBar() {
      this.props.toggleNotificationsBar();
    }
  
    render() {
      return (
          <>
          <div className="home_searchBarContainer">
            <img src={searchIcon} className="searchIcon" alt="search icon" /> 
            <input type="input" className="searchBar" placeholder="Search here" 
                  value={this.props.inputValue}
                  onChange={this.props.onChange} />
            <Motion defaultStyle={{x: 0}} style={{x: spring(this.props.open ? 0 : 1, presets.stiff)}} >
              {interp => <span className="nav__notification__num" style={{transform: `translateZ(0) scale(${interp.x}`, opacity: interp.x}}></span>}
            </Motion>
              <SearchResultBar open={this.props.open}/>
          </div>
          </> 
      )
    }
  }

  
  export default SearchBarInput;


