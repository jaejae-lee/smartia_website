import React, { Component } from 'react';
import { Motion, spring, StaggeredMotion, presets } from 'react-motion';
import Media from './Media';
  
  class NotificationsBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        media: [ {
                 name: 'Machine number 2',
                 action: 'is doing some stuff and',
                 content: 'temperature rising',
                  new: true},
                {
                 name: 'Machine number 11',
                 action: 'has finised doing stuff and',
                 content: 'stopped working',
                  new: true},
                {
                 name: 'Machine number 11',
                 action: 'has finised doing stuff and',
                 content: 'has finised doing stuff and',
                  new: true},
            ]
      };
    }
    render() {
      const {media} = this.state;
      const motionParams = media.map(_ => Object.assign({},{h:0}));
      
      return (
        <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(this.props.open ? 1 : 0, presets.stiff)}}>
          {interpOuter =>
        <div style={interpOuter} className="nav__notification_bar">
           <Motion defaultStyle={{x: 0}} style={{x: spring(this.props.open ? 0 : -5, presets.stiff)}}>
             {interp => <h3 style={{transform: `translateY(${interp.x}px)`}}>Notifications</h3>}
          </Motion>
              
                    <StaggeredMotion defaultStyles={motionParams} styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
      return i === 0
        ? {h: spring(this.props.open ? 100 : 0, presets.wobbly)}
        : {h: spring(prevInterpolatedStyles[i - 1].h)}
    })}>
                      {interps =>
                <ul className="nav__notifications__list">
            {interps.map((style, i) => <Media key={i} style={{height:style.h}} imageURL={media[i].imgURL} name={media[i].name} action={media[i].action} content={media[i].content} open={this.props.open} new={media[i].new} />)}
                  </ul>
                      }
                    </StaggeredMotion>
            </div>
        }
          </Motion>
      );
    }
  }
  
  export default NotificationsBar;


