import React, { Component } from 'react';
import { Framework7App, Statusbar, Views, View, Pages, Link, Page,PageContent} from 'framework7-react';
import routes from '../../routes.js';
import Home from '../pages/home';
import Login from '../pages/login';
import Footer from '../common/footer';

// The both Framework7 and Dom7 are exposed in window.*
import 'framework7';
window.$$=window.Dom7;
// console.log(window.Dom7);
window.f7App = null;
window.currentRoute = null;
export default class App extends Component {
  render() {
    return (
      <Framework7App themeType="ios" routes={routes} onFramework7Init={f7=>window.f7App=f7} onRouteChange={route => window.currentRoute = route}>
    <Statusbar />
  {/* Views 唯一 */}
    <Views>
      <View main id='main-view'>
        <Pages>
          <Home/>
        </Pages>
        <Footer/>
      </View>
      <Login/>
    </Views>
  </Framework7App>
    );
  }
}

