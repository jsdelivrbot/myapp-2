import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Framework7App, Statusbar, Views, View, Pages} from 'framework7-react';
import routes from '../../routes.js';
import Home from '../pages/home';
import Login from '../pages/login';
import Footer from '../common/footer';

// The both Framework7 and Dom7 are exposed in window.*
import 'framework7';
window.$$=window.Dom7;   //window.$$来存储f7的dom对象
// console.log(window.Dom7);
window.f7App = null;     //window.f7App来存储f7对象
window.currentRoute = null;


@inject('footerStatus')
@observer

export default class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){
    //检测是否有用户信息
    let school = localStorage.getItem('school');
    let tel = localStorage.getItem('tel_number');
    let deathToken=localStorage.getItem('token_death');

    //如果没有或者token过期(过死线),那么会执行window.f7App.loginScreen()打开登录页
    let now=new Date();
    now=Date.parse(now);
    school&&tel&&(now<deathToken)?null:window.f7App.loginScreen();
  }

  render() {
    return (

      <Framework7App themeType="ios" routes={routes} onFramework7Init={ f7 => window.f7App = f7 } onRouteChange={ route => window.currentRoute = route } >
        <Statusbar />
        {/* Views 唯一 */}
        <Views>
          <View main id='main-view'>
            <Pages>
              <Home/>
            </Pages>

            {
              this.props.footerStatus.footerShow && <Footer/>
            }
          </View>
          <Login/>
        </Views>
      </Framework7App>
    );
  }
}




