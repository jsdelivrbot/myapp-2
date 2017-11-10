import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className='page' data-page='home'>
        <div className='page-content'>
          <p className='toMessage'><a href="/home/message" className='link'>点我去message</a></p>
        </div>
      </div>
    );
  }
}