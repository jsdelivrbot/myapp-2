import React, { Component } from 'react'

import { observer, inject } from 'mobx-react';

import WpHeader from '../../common/wp-header' // <= 公告头部
import WpShare from '../../common/share' // <= 分享

import '../../../assets/less/components/announcement/index.css' // <= css
import fenxiangIcon from '../../../assets/img/nav/fenxiang.png' // <= 分享按钮

@inject('footerStatus')
@observer

export default class Announcement extends Component {

	constructor(props){
        super(props)
        this.state = {
            opened: false // <= 分享弹出框默认状态，隐藏
        }
    }

    onShare = () => {
    	this.setState({
    		opened: true
    	})
    }

	componentDidMount () {
		this.props.footerStatus.setStatus(false)
	}

	componentWillUnmount () {
		this.props.footerStatus.setStatus(true)
	}

	render () {
		return (
			<div data-page='announcement' className='navbar-fixed toolbar-fixed page'>

				<WpHeader 
					title='公告'
					back
					right={
						<a href='#' className='link' onClick={ this.onShare } >
							<img src={ fenxiangIcon } alt='点击分享' className='wpIcon' width='.36rem' />
						</a>
					}
				 />

				<div className='page-content page-content-home'>

					<div className='announcement'>
						<div className='announcementTitle'>关于申报2017年度创新性实验项目的通知</div>
						<div className='announcementStatus'>教务处 <time>11／06 15:08</time></div>
						<div className='announcementText'>
							实验项目是培养学生实验能力、合作能力和创新能力的重要载体，为贯彻落实《中共浙江工业大学委员会关于全面深化人才培养改革的决定》（浙工大党〔2016〕6号）精神，推动实验教学改革发展，进一步完善实验教学体系建设，学校决定启动2017年度创新性实验项目申报工作。现就有关事项通知如下：
						</div>
					</div>

				</div>

				<WpShare opened={ this.state.opened } />

			</div>
		)
	}
}