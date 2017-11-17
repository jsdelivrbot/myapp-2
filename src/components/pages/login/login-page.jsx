import React,{Component} from 'react';

export default class LoginPage extends Component{

  constructor() {
    super();
    this.state = {
      val:''
    };
  }

  goLost=(is)=>{  //控制跳转的是注册页还是找回密码页
    window.appStores.userStore.changeIs(is);
  };

  changeV=(e)=>{
    this.setState({val: e.target.value});
  };

  render(){
    return(
      <div className='page' data-page='login-page'>
        <div className='page-content login-screen-content'>
          <div className='logo-ic'></div>
          <h1 className='login-title'>掌握校园 智慧青春</h1>
          <div className='login-content'>
            <ul className='login-ul'>
              <li>
                <input type="number" placeholder='手机号' name='telNumber' onChange={this.changeV} value={this.state.val}/>
                <span className='tel-ic' onClick={()=>this.setState({val:''})}></span>
              </li>
              <li>
                <input type="password" placeholder='输入密码' name='password'/>
                <span className='pw-ic'></span>
              </li>
            </ul>
            <div className='sign-btn'>
              <a href="/login/register" className='lost-password' onClick={this.goLost.bind(this,false)}>忘记密码</a>
              <a href="/login/register" className='sign-new' onClick={this.goLost.bind(this,true)}>新用户注册</a>
            </div>
            <div className='btn-login-container'>
              <a href='/login/school' className='btn-login'>登录</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}