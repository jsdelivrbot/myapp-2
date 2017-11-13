import React, { Component } from 'react';
import { Framework7App, Statusbar, Views, View, Pages} from 'framework7-react';
import routes from '../../routes.js';
import Home from '../pages/home';
// import Login from '../pages/login';
import Footer from '../common/footer';

// The both Framework7 and Dom7 are exposed in window.*
import 'framework7';
window.$$=window.Dom7;
// console.log(window.Dom7);
window.f7App = null;
window.currentRoute = null;
export default class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     activedLink: 1
  //   };
  // }
  // //判断当前路由page页数,>=2就删除cached(0)
  // handleClick(index) {
  //   this.setState({ activedLink: index });
  //   let cached = window.$$('#main-view .pages>.page');
  //
  //   if (cached.length >= 2) {
  //     cached[0].remove();
  //   }
  // }
  render() {
    return (
      <Framework7App themeType="ios" routes={routes} onFramework7Init={f7=>window.f7App=f7} onRouteChange={route => window.currentRoute = route}>
    <Statusbar />
  {/* Views 唯一 */}
    <Views>
      <View main id='main-view'>
        <Pages>
          <Home href='111'>

          </Home>
        </Pages>
        <Footer/>
      </View>
      {/*<Login/>*/}
    </Views>
  </Framework7App>
    );
  }
}

