import React, {Component} from 'react';

import { observer, inject } from 'mobx-react';

import actions from '../../../actions';

import Swiper from '../../common/banner';
import WpHeader from '../../common/wp-header'; // <= 动态校园头部
import WpTitleBox from '../home/home-title'; // <= 标题
import WpListItem from '../home/home-list-item'; // <= 动态校园列表

@inject('footerStatus')
@inject('dynamicState')
@observer

export default class DynamicCampus extends Component {

    componentDidMount () {
        this.props.footerStatus.setStatus(false)
    }

    componentWillUnmount () {
        this.props.footerStatus.setStatus(true)
    }

	render () {

		const dynamicState = this.props.dynamicState.data

		return (
			<div data-page='dynamicCampus' className='navbar-fixed toolbar-fixed page'>

				<WpHeader 
                    title='浙江传媒学院'
                    back
                    right={
                        <a href='#' className='link' >校历</a>
                    }
                />

				<div className='page-content page-content-home'>

					{/*轮播组件引入*/}
                    <Swiper/>

                    {/* 动态校园 */}
                    <div className='wpCentent'>

                        <WpTitleBox title='动态校园' />

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

				</div>

			</div>
		)
	}
}