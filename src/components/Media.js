import React, { Component } from 'react';
import { Motion, spring, StaggeredMotion, presets } from 'react-motion';

  class Media extends Component {
    render() {
      const cls = "nav__notifications__list__item" + (this.props.new ? " nav__notifications__list__item--new" : "");
      return (
        <li style={this.props.style} className={cls}>
          <div className="nav__notifications__list__item__display">
            <Motion defaultStyle={{x:0.6}} style={{x:spring(this.props.open ? 1 : 0.6, presets.wobbly)}}>
              {interp => <img src={this.props.imageURL} className="nav__notifications__list__item__photo" style={{transform: `scale(${interp.x})`}}/> }
            </Motion>
          </div>
          
          <div className="nav__notifications__list__item__desc">
            <Motion defaultStyle={{x: 0}} style={{x: spring(this.props.open ? 0 : 1, presets.wobbly)}} >
            
                {interp => <div style={{transform: `translateZ(0) translateY(${-15*interp.x}px)`, opacity: 1-interp.x}}>
                <em>{this.props.name}</em> {this.props.action} <em> {this.props.content}</em>.
                </div>}
            
               </Motion>
          </div>
          </li>
      );
    }
  }

  export default Media;
  
  

