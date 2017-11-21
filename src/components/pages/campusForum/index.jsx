import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';

import actions from '../../../actions';

import WpTitleBox from '../home/home-title'; // <= 标题
import WpForumItem from './forum-item'; // <= 论坛消息列表
import WpCommentMes from './forum-item-mes'; // <= 评论消息列表
import WpForumFeatures from './forum-features' // <= 删除，评论
import WpConmfirm from '../../common/confirm'; // <= 确定取消弹框
import WpSendBox from '../../common/sendBox'; // <= 评论消息发送框

import '../../../assets/less/components/campusForum/index.css';

import img from '../../../assets/img/login/background.png';


@inject('campusState')
@observer

export default class CampusForum extends Component {

	constructor (props) {
        super(props)
        this.state = {
            onWpConmfirmShow: false, // <= 弹出框默认状态，隐藏
            sendMesIndex: -1 // <= 获取到点击评论是在列表的哪一列(默认没有)
        }
    }

    // <= 点击显删除取消弹出框
    onBottom = ( index ) => () => {
        this.setState({
            onWpConmfirmShow: true,
            sendMesIndex: index
        })
    }

    // <= 点击点赞的按钮事件
    onLikes = () => {

    }

    // <= 点击评论的按钮事件
    onComment = (index) => () => {
        this.refs.wpSendBox.onSendBoxShow()
        
        // ^^ 获取到点击评论是在列表的哪一列 :-(
        this.setState({
            sendMesIndex: index  
        })
    }


    // <= 点击发送消息按钮事件
    onSureSendMes = (bool, val) => () => {
        console.log(bool, val)
        let data = {
            name: '彭一妮',
            time: '1483250522',
            text: val,
            id: 3
        }

        this.refs.wpSendBox.onSendBoxHide()

        // ^^ bool 为true的时候才可以发送消息 ^^
        bool && this.props.campusState.addMesData(data, this.state.sendMesIndex)
    }

    // <= 点击弹出框的删除按钮事件 (确定回调)
    onConfirm = () => {
        this.setState({
            onWpConmfirmShow: false
        })
        this.props.campusState.deleteData(this.state.sendMesIndex)
    }

    // <= 点击弹出框的取消按钮事件
    onCancel = () => {
        this.setState({
            onWpConmfirmShow: false
        })
    }

    render () {

    	return (
    		<div className='wpCampusForum'>
    			<WpTitleBox title='校内论坛' />

    			<ul className='wpForumList'>

    				{
    					this.props.campusState.data.map( (val, index) => {
    						const data = {
    							name: val.name,
    							title: val.title,
                                img: img,
    							text: val.text
    						}
                            const data1 = {
                                time: actions.dateC(val.time),
                                comment: val.comment,
                                likes: val.likes,
                                onDelete: this.onBottom(index),
                                onLikes: this.onLikes,
                                onComment: this.onComment(index)
                            }
    						return (
								<WpForumItem 
                                    key={ val.id }
                                    { ...data } 

                                    wpForumFeatures={
                                        <WpForumFeatures { ...data1 } />
                                    }
                                >
                                    <div className='wpCommentMes'>
                                        {
                                            val.commentMes.map( ( val, index ) => {
                                                const data2 = {
                                                    name: val.name,
                                                    time: actions.dateC(val.time),
                                                    text: val.text
                                                }
                                                return (
                                                    <WpCommentMes key={ index } { ...data2 } />
                                                )
                                            } )
                                        }
                                    </div>
                                </WpForumItem>
							)
    					} )
    				}
   
    			</ul>

                {/* 确定取消弹框  */}
                <WpConmfirm 
                    onConfirm={ this.onConfirm } 
                    onCancel={ this.onCancel } 
                    onWpConmfirmShow={ this.state.onWpConmfirmShow } 
                    title='确定删除吗？'
                    confirmText='删除'
                    cancelText='取消'
                />

                {/* 消息发送框 */}
                <WpSendBox 
                    onSureSendMes={ this.onSureSendMes }
                    ref='wpSendBox'
                 />

    		</div>
		)
    }
}

