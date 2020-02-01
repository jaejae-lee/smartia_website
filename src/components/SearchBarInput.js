import React, { Component } from 'react';
import { Motion, spring, StaggeredMotion, presets } from 'react-motion';
import NotificationsBar from './NotificationsBar';
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
          <input type="input" className="searchBar" placeholder="Search here" onChange={this.toggleNotificationBar}/>
          <Motion defaultStyle={{x: 0}} style={{x: spring(this.props.open ? 0 : 1, presets.stiff)}} >
            {interp => <span className="nav__notification__num" style={{transform: `translateZ(0) scale(${interp.x}`, opacity: interp.x}}></span>}
          </Motion>
            <NotificationsBar open={this.props.open}/>
          </> 
      )
    }
  }

  
  export default SearchBarInput;


