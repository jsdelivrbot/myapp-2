import React,{Component} from 'react';

export default class Footer extends Component{
  render() {
    return (
      <div className="toolbar">
        <div className="toolbar-inner">
          <a href="/home" className="link">校圈</a>
          <a href="/study" className="link">云课堂</a>
          <a href="/discover" className="link midden">发现</a>
          <a href="/myself" className="link">我的</a>
          <a href="/chat" className="link">聊天</a>
        </div>
      </div>
    )
  }
}