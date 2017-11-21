import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import '../../assets/less/common/confirm.css';


export default class WpConmfirm extends PureComponent {

    static defaultProps = {
        onWpConmfirmShow: false,
        onDelete: () => { },
        onCancel: () => { }
    }


	constructor(props){
        super(props)
        this.state = {
            onWpConmfirmShow: props.onWpConmfirmShow // <= 弹出框默认状态，隐藏
        }
    }

    componentWillReceiveProps (newProps) {
        this.setState({
            onWpConmfirmShow: newProps.onWpConmfirmShow
        })
    }

    componentDidUpdate() {
    	if ( this.state.onWpConmfirmShow ) {
        	this._renderLayer()
        } else {
        	ReactDOM.unmountComponentAtNode(this.popup)
        	document.getElementById('root').removeChild(this.popup)
        }
    }

    componentWillUnmount(){ //在组件卸载的时候，保证弹层也被卸载掉
        ReactDOM.unmountComponentAtNode(this.popup)
        document.getElementById('root').removeChild(this.popup)
    }

    _renderLayer(){ //将弹层渲染到body下的div标签
		this.popup = document.createElement('div')
    	document.getElementById('root').appendChild(this.popup)
	     		
        ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            <div>
                <div className='wpMaskLayer' onClick={ this.onHide } ></div>
                <Conmfirm 
                    onConfirm={ this.props.onConfirm } 
                    onCancel={ this.props.onCancel } 
                    title={ this.props.title }
                    confirmText={ this.props.confirmText }
                    cancelText={ this.props.cancelText }
                />
            </div>, 
        	this.popup
        )
    }

    onHide = () => {
        this.setState({
            onWpConmfirmShow: false
        })
    }

	render () {  
		return null
	}
}

WpConmfirm.defaultProps = {
	onWpConmfirmShow: false
} 

const Conmfirm = (props) => (
	<div className='wpConmfirm'>
		<div className='wpConmfirmText border1px'>{ props.title }</div>
		<buttom className='wpConmfirmDelete' onClick={ props.onConfirm } >{ props.confirmText }</buttom>
		<buttom className='wpConmfirmCancel' onClick={ props.onCancel }>{ props.cancelText }</buttom>
	</div>
)