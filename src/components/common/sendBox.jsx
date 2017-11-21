import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import '../../assets/less/common/sendBox.css'
import emojiIcon from '../../assets/img/emoji.png'


export default class SendBox extends PureComponent {

	constructor (props) {
        super(props)
        this.state = {
        }
    }

    componentWillUnmount(){ //在组件卸载的时候，保证弹层也被卸载掉
        ReactDOM.unmountComponentAtNode(this.popup)
        document.getElementById('root').removeChild(this.popup)
    }

    _renderLayer(){ //将弹层渲染到body下的div标签
		this.popup = document.createElement('div')
    	this.popup.className = 'clearMaskLayer'
    	document.getElementById('root').appendChild(this.popup)

    	const isPorps = {
    		onSendBoxHide: this.onSendBoxHide,
    		onSureSendMes: this.props.onSureSendMes,
            sss: true
    	}

        ReactDOM.render(
        	<SendBoxCenter { ...isPorps } />, 
        	this.popup
        )
    }

    onSureSendMes = (isShow, mesData) => {
    	this.props.onSureSendMes(isShow, mesData)
    }

 	onSendBoxShow = () => {
 		this._renderLayer()
 	}

 	onSendBoxHide = () => {
 		ReactDOM.unmountComponentAtNode(this.popup)
        document.getElementById('root').removeChild(this.popup)
 	}   

	render() {

		return null
	}
}

class SendBoxCenter extends PureComponent {

	constructor (props) {
        super(props)
        this.state = {
            isShow: false, // < == 显示可以发送的默认状态
            mesData: '' // <== 用来存储输入的评论
        }
    }

    onChange = (event) => {
    	let isShow
    	if ( event.target.value.length >= 1 ) {
    		isShow = true
    	} else {
    		isShow: false
    	}
    	this.setState({
    		isShow: isShow,
    		mesData: event.target.value
    	})
    }

	render () {
		return (
			<div className='clearMaskLayer'>
				<div className='clearMask' onClick={ this.props.onSendBoxHide } ></div>
				<div className='sendBox'>
					<input type='text' placeholder='评论' className='sendInput' onChange={ this.onChange } autoFocus />
					<img src={ emojiIcon } alt='表情' className='sendFace' />
					<buttom 
						className={ `sendMes ${ this.state.isShow && 'sendMesOn' }` }
						onClick={ this.props.onSureSendMes( this.state.isShow, this.state.mesData ) } >
						发送
					</buttom>
				</div>
			</div>
		)
	}	
	
}
