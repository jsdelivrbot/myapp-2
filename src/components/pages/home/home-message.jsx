import React, { Component } from 'react';

export default class HomeMessage extends Component{
  render () {
    return (
      <div className='page' data-page='message'>
        <div className='page-content'>
          <p><a href="/home/message" className="button button-fill fs-18 cl-white bg-bluegreen link">注册</a></p>
        </div>
      </div>
    );
  }
}
