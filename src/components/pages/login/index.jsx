import React,{Component} from 'react';
import {LoginScreen,View,Pages} from 'framework7-react';
import LoginPage from './login-page';

export default class Login extends Component{
  render() {
    return (
      <LoginScreen id='login-screen'>
        <View className='view login-screen'>
          <Pages>
            <LoginPage/>
          </Pages>
        </View>
      </LoginScreen>
    );
  }
}