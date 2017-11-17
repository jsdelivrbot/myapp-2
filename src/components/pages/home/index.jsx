import React, {Component} from 'react';

import { observer, inject } from 'mobx-react';

import {
  List,
  ListItem
} from 'framework7-react';

import actions from '../../../actions';

import Swiper from '../../common/banner';
import Acco from '../../common/accordion';

import Header from './home-header'; // <= 首页头部
import WpTitleBox from './home-title'; // <= 标题
import WpListItem from './home-list-item'; // <= 动态校园

@inject('homeStore')
@observer


export default class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div data-page='home' className='navbar-fixed toolbar-fixed page'>

        <Header />

        <div className='page-content page-content-home'>

          {/*轮播组件引入*/}
          <Swiper/>


          {/* 动态校园 */}
          <div className='wpCentent'>
            <WpTitleBox title='动态校园' link='#' linkShow />

            <ul className='wpList'>
              {
                itemData.map( (val, index) => (
                  <WpListItem key={ val.id } text={ val.text } after={ actions.dateC( val.time ) } />
                ))
              }
            </ul>
          </div>

        </div>
      </div>
    );
  }
}


const itemData = [
  {
    text: '教务处：创新性实验项目申报通知目申报通知目申报通知目申报通知',
    time: '1483250522',
    id: 1
  },
  {
    text: '教务处：创新性实验项目申报通知目申报通知目申报通知目申报通知',
    time: '1510725722',
    id: 2
  },
  {
    text: '教务处：创新性实验项目申报通知目申报通知目申报通知目申报通知',
    time: '1510725722',
    id: 3
  },
  {
    text: '教务处：创新性实验项目申报通知目申报通知目申报通知目申报通知',
    time: '1510725722',
    id: 4
  },
  {
    text: '教务处：创新性实验项目申报通知目申报通知目申报通知目申报通知',
    time: '1510725722',
    id: 5
  },
  {
    text: '教务处：创新性实验项目申报通知目申报通知目申报通知目申报通知',
    time: '1510725722',
    id: 6
  }
]