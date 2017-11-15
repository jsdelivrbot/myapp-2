import React,{Component} from 'react';
import {Page,Navbar,Link} from 'framework7-react';

export default class Discover extends Component{
  render(){
    return(
      <Page>
        <div>
          photo
          {console.log(window.f7App)}
        </div>
      </Page>
    )
  }
}