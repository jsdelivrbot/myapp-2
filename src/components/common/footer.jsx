import React,{Component} from 'react';


export default class Footer extends Component{
  constructor() {
    super();
    this.state = {
      activedLink: 1
    };
  }
  //判断当前路由page页数,>=2就删除cached(0)
  handleClick(index) {
    this.setState({activedLink:index});
    let cached = window.$$('#main-view .pages>.page');

    console.log(cached);
    if (cached.length >= 2) {
      cached[0].remove();
    }
  }
  render() {
    return (
      <div className="toolbar">
        <div className="toolbar-inner">
          <a href="/home" className="link" onClick={this.handleClick.bind(this,1)}>校圈</a>
          <a href="/study" className="link" onClick={this.handleClick.bind(this,3)}>云课堂</a>
          <a href="/discover" className="link midden" onClick={this.handleClick.bind(this,4)}>发现</a>
          <a href="/myself" className="link" onClick={this.handleClick.bind(this,5)}>我的</a>
          <a href="/chat" className="link" onClick={this.handleClick.bind(this,6)}>聊天</a>
        </div>
      </div>
    )
  }
}