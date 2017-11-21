import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import pengyouquan from '../../../assets/img/fenxiang/pengyouquan.png'
import weixin from '../../../assets/img/fenxiang/weixin.png'
import qq from '../../../assets/img/fenxiang/qq.png'


export default class WpShare extends Component {

    static propTypes = {
        opened: React.PropTypes.bool
    }

	static defaultProps = {
		opened: false
	}

	constructor(props){
        super(props)
        this.state = {
            opened: props.opened // <= 弹出框默认状态，隐藏
        }
    }

    componentWillReceiveProps (newProps) {
        this.setState({
            opened: newProps.opened
        })
    }

    componentDidUpdate() {
    	if ( this.state.opened ) {
        	this._renderLayer()
        } else {
        	ReactDOM.unmountComponentAtNode(this.popup)
        	document.getElementById('root').removeChild(this.popup)
        }
    }

    componentWillUnmount(){ //在组件卸载的时候，保证弹层也被卸载掉
        if ( this.setState.opened ) {
           ReactDOM.unmountComponentAtNode(this.popup)
            document.getElementById('root').removeChild(this.popup) 
        }
    }

    _renderLayer(){ //将弹层渲染到body下的div标签
		this.popup = document.createElement('div')
    	document.getElementById('root').appendChild(this.popup)
	     		
        ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            <div>
                <div className='wpMaskLayer' onClick={ this.onHide } ></div>
                <Share onCancel={ this.onHide } opened={ this.state.opened } />
            </div>, 
        	this.popup
        )
    }

    onHide = () => {
        this.setState({
            opened: false
        })
    }

	render () {
		return null
	}
}


const Share = (props) => (
	<div className='wpShare' >
		<div className='wpShareTitle'>分享到:</div>
        <div className='wpShareCenter'>
            <a href='#' title='pengyouquan'>
                <img src={ pengyouquan } alt='pengyouquan' />
                微信朋友圈
            </a>
            <a href='#' title='weixin'>
                <img src={ weixin } alt='weixin' />
                微信
            </a>
            <a href='#' title='qq'>
                <img src={ qq } alt='qq' />
                QQ好友
            </a>
        </div>
        <buttom className='wpShareCancel' onClick={ props.onCancel } >取消</buttom>
	</div>
)