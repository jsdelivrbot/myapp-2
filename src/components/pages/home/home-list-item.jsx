import React, {Component} from 'react';

export default class WpListItem extends Component {

	constructor (props) {
        super(props)
        this.state = {
            active: false
        }
    }

    isClick = () => {
        this.setState({
            active: true
        })
        window.setTimeout( () => {
            this.setState({
                active: false
            })
        }, 120)
    }

    render () {
    	return (
			<li className={`wpListItem wpPadding-lr border1px ${ this.state.active ? 'wpList-active' : '' }`}>
		        <a href='#' title='' onClick={ this.isClick } >
		            <p className='wpText'>{ this.props.text }</p>
		            <time className='wpTime'>{ this.props.after }</time>
		        </a>
		    </li>
		)
    }
};