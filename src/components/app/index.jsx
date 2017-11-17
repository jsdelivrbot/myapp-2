import React, { Component } from 'react';
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
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      activedLink: 1,
      isLoginShow: true
    };
  }

  onFramework7Init(f7) {
    window.f7App = f7;
  }

  onRouteChange(route) {
    window.currentRoute = route;
  }

  componentDidMount(){
    //检测是否有用户信息
    let user = localStorage.getItem('user_info');
    let school = localStorage.getItem('school_name');
    let tel = localStorage.getItem('tel_number');

    //如果没有,那么会执行window.f7App.loginScreen()打开登录页
    school && window.appStores.userStore.setData({ school: school });
    user ? window.appStores.userStore.setData({realname: user,tel: tel}) : window.f7App.loginScreen();
  }

  render() {
    return (
      <Framework7App themeType="ios" routes={routes} onFramework7Init={this.onFramework7Init} onRouteChange={this.onRouteChange}>
    <Statusbar />
  {/* Views 唯一 */}
    <Views>
      <View main id='main-view'>
        <Pages>
          <Home/>
        </Pages>
        <Footer/>
      </View>
    </Views>
        {
          this.state.isLoginShow?<Login/>:null
        }
      </Framework7App>
    );
  }
}

