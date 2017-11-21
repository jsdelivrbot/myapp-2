import React from 'react';

import { Link } from 'framework7-react';

import backIcon from '../../assets/img/login/back_arrow.png'; // <= 返回上一页icon

const Header = (props) => (
	<div className='navbar'>
		<div className='navbar-inner wpPadding-lr'>

			<div className='left'>
				
				{
					props.back
						? <Link back >
							<img src={ backIcon } alt='' className='wpIcon' style={{ width: '.22rem' }} />
						</Link>
						: props.left
				}
			</div>

			<div className='center navTitle'>{ props.title }</div>

			<div className='right'>
				{
					props.right
				}
			</div>
		</div>
    </div>
)

export default Header;