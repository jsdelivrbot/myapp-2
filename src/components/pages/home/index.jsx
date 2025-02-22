import React, {Component} from 'react';

import { observer, inject } from 'mobx-react';

import actions from '../../../actions';

import Swiper from '../../common/banner';
import Acco from '../../common/accordion';

import WpHeader from '../../common/wp-header'; // <= 首页头部
import WpTitleBox from './home-title'; // <= 标题
import WpListItem from './home-list-item'; // <= 动态校园
import WpCampusForum from '../campusForum'; // <= 校内论坛

import scanIcon from '../../../assets/img/nav/scan.png'; // <= 扫二维码icon
import messageIcon from '../../../assets/img/nav/message.png' // <= 点击消息中心icon

@inject('footerStatus')
@inject('dynamicState')
@observer


export default class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      footerShow: props.footerStatus.footerShow
    }
  }

  componentDidMount () {

    window.$$.ajax({
      url: 'http://47.100.5.94/api/dynamic/campus?school_type=yxy',
      method: 'get',
      data: { },
      dataType: 'json',
      success: (res) => {
        this.props.dynamicState.setData(res)
        console.log(this.props.dynamicState)
      }
    })
  }

  render() {

    const dynamicState = this.props.dynamicState.data

    return (
      <div data-page='home' className='navbar-fixed toolbar-fixed page'>

        <WpHeader
          title='浙江传媒学院'
          left={
            <a href='#' className='link' >
              <img src={ scanIcon } className='wpIcon' />
            </a>
          }
          right={
            <a href='#' className='link'  >
              <img src={ messageIcon } className='wpIcon' />
            </a>
          }
        />





        <div className='page-content page-content-home'>

          {/*轮播组件引入*/}
          <Swiper/>


          {/* 动态校园 */}
          <div className='wpCentent'>
            <WpTitleBox title='动态校园' link='/dynamicCampus' linkShow />

            <ul className='wpList'>
              {
                dynamicState && dynamicState.resource.map( (val, index) => {
                  if ( index <= 5 ) {
                    return (
                      <WpListItem key={ val.id } link='#' title={ val.title } after={ actions.dateC( val.public_time ) } />
                    )
                  }
                })
              }
              <WpListItem key='1' link='/announcement' title='点击我' after='11/11' />
            </ul>

          </div>

          {/* 校内论坛 */}
          <WpCampusForum />

        </div>

      </div>
    );
  }
}
