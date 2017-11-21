import React,{Component} from 'react';


export default class Footer extends Component{
  constructor() {
    super();
    this.state = {
      activedLink: 1
    };
  }
  //判断当前路由page页数,>=2就删除cached(0)
  handleClick (index) {
    this.setState({ activedLink: index });
    let cached = window.$$('#main-view .pages>.page');

    if (cached.length >= 2) {
      cached[0].remove();
    }
  }

  render() {
    return (
      <div className="footer">
        <a href="/home" className={`link wpFooterIcon ${ this.state.activedLink == 1 ? 'wpActived' : '' }`} onClick={this.handleClick.bind(this,1)}>校圈</a>
        <a href="/study" className={`link wpFooterIcon ${ this.state.activedLink == 3 ? 'wpActived' : '' }`} onClick={this.handleClick.bind(this,3)}>云课堂</a>
        <a href="/issue" className={`link wpFooterIcon ${ this.state.activedLink == 4 ? 'wpActived' : '' }`} onClick={this.handleClick.bind(this,4)}>发布</a>
        <a href="/myself" className={`link wpFooterIcon ${ this.state.activedLink == 5 ? 'wpActived' : '' }`} onClick={this.handleClick.bind(this,5)}>我的</a>
        <a href="/chat" className={`link wpFooterIcon ${ this.state.activedLink == 6 ? 'wpActived' : '' }`} onClick={this.handleClick.bind(this,6)}>聊天</a>
      </div>
    )
  }
}