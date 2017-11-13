import React, { Component } from 'react';

export default class HomeMessage extends Component{
  render () {
    return (
      <div className='page' data-page='message'>
        <div className='page-content'>
          <p><a href="" className="back button button-fill fs-18 cl-white bg-bluegreen link">back</a></p>
        </div>
      </div>
    );
  }
}
