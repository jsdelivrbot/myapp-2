import React, { Component } from 'react'

export default class WpForumFeatures extends Component {

	static defaultProps = {
		onLikes: () => { },
	}

	constructor (props) {
        super(props)
        this.state = {
            openedLikes: false, // <= 点赞默认状态，隐藏
        }
    }

    onLikes = () => {
    	this.setState({
    		openedLikes: !this.state.openedLikes
    	})
    	this.props.onLikes()
    }

	render () {
		return (
			<div className='wpForumFunction'>
				<time className='wpTime'>{ this.props.time }</time>
				<bottom className='wpDelete wpPadding-lr' onClick={ this.props.onDelete } >删除</bottom>
				
				<bottom className='wpComment' onClick={ this.props.onComment }>{ this.props.comment }</bottom>

				<bottom 
					className={ `wpLikes ${ this.state.openedLikes && 'wpLikes-on' } wpPadding-lr` } 
					onClick={ this.onLikes } 
				>
					{ this.props.likes }
				</bottom>
			</div>
		)
	}
}