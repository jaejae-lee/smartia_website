import React, { Component } from 'react';
import { Motion, spring, StaggeredMotion, presets } from 'react-motion';
import NotificationsBar from './NotificationsBar';
  
  class Notifications extends Component {
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
        <div className="nav__notification">
          <span className="nav__notification__icon" onClick={this.toggleNotificationBar}>3</span>
          <Motion defaultStyle={{x: 0}} style={{x: spring(this.props.open ? 0 : 1, presets.stiff)}} >
            {interp => <span className="nav__notification__num" style={{transform: `translateZ(0) scale(${interp.x}`, opacity: interp.x}}></span>}
          </Motion>
            <NotificationsBar open={this.props.open}/>
      </div>
      )
    }
  }
  
  export default Notifications;


