import React,{Component} from 'react';

export default class Issue extends Component{
  render(){
    return(
      <div className='page' data-page='issue'>
        <div className='page-content page-content-issue'>
          <div className='big-banner'>我是广告</div>
          <ul className='select-list-issue'>
            <li>校内论坛</li>
            <li>互助代办</li>
            <li>二手闲置</li>
            <li>校友圈</li>
          </ul>
          <p className='cancelXwy'>
            <a href="" className='link back'>取消</a>
          </p>
        </div>
      </div>
    )
  }
}