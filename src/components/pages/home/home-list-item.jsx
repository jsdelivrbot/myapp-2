import React from 'react';

const WpListItem = (props) => (
    <li className='wpListItem border1px'>
        <a href={ props.link } title={ props.title } className='wpListItemLink wpPadding-lr'>
            <p className='wpText'>{ props.title }</p>
            <time className='wpTime'>{ props.after }</time>
        </a>
    </li>
)

export default WpListItem;