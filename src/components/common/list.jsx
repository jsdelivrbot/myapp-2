import React,{Component} from 'react';
import {List , ListItem , ListItemSwipeoutActions , ListItemSwipeoutButton} from 'framework7-react';

const sObj=[
  {pp:'<h1>这是消息1的头</h1><p>这是消息1的内容</p>',kk:1},
  {pp:'<h1>这是消息1的头</h1><p>这是消息1的内容</p>',kk:2},
  {pp:'<h1>这是消息1的头</h1><p>这是消息1的内容</p>',kk:3},
  {pp:'<h1>这是消息1的头</h1><p>这是消息1的内容</p>',kk:4}
  ];

export default class Swipeout extends Component{ //滑动删除组件

  constructor(){
    super();
  }

  render(){
    return(
      <List>
    {sObj.map((s)=>{
      return(
        <ListItem swipeout title={s.pp} key={s.kk}>
          <ListItemSwipeoutActions>
            <ListItemSwipeoutButton close color="blue">取消</ListItemSwipeoutButton>
            <ListItemSwipeoutButton delete>删除</ListItemSwipeoutButton>
          </ListItemSwipeoutActions>
        </ListItem>
      )
    })}
      </List>
    )
  }
}