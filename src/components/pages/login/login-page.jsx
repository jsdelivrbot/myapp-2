import React,{Component} from 'react';

export default class LoginPage extends Component{

  constructor() {
    super();
    this.state = {
      val:'',
      telR:true,
      codeR:true,
      pwR:true,
      pwT:true
    };
  }

  goLost=(is)=>{  //控制跳转的是注册页还是找回密码页
    window.appStores.userStore.changeIs(is);
  };

  changeV=(e)=>{
    this.setState({val: e.target.value,telR:true});
  };

  clearP=()=>{  //清除password提示
    this.setState({pwR:true,pwT:true})
  };


  login=()=>{
    let tel=this.state.val;
    let pw=this.refs.pw.value;

    if(!(/^1[34578]\d{9}$/.test(tel))){  //如果手机号不符合规则
      this.setState({telR:false});       //显示提示
      return;         //return
    }

    if(!(/^[a-z0-9]{6,16}$/.test(pw))){  //如果密码不符合规则
      this.setState({pwR:false});        //显示提示
      return;         //return
    }

    window.$$.ajax({
      url:'http://47.100.5.94/api/login',
      method:'post',
      dataType:'json',
      data:{phone:tel,password:pw},
      success:(data)=>{
        if(data.errcode){
          let obj={
            tel:tel,
            token:data.resource.token
          };
          window.appStores.userStore.setData(obj);
          localStorage.setItem('tel_number',tel);
          localStorage.setItem('token',obj.token);
          //判断token一年死线 使用时间戳
          let now=new Date();
          now.setFullYear(now.getFullYear()+1);
          now=Date.parse(now);
          console.log(now);
          localStorage.setItem('token_death',now);
          window.appStores.userStore.changeF(false);
          setTimeout(()=>window.$$('#aXwy')[0].click(),500) //定时器调用click完成跳转
        }else {
          this.setState({pwT:false});
        }
      },
      error:(err)=>{
        console.log(err);
      }
    });
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
                {this.state.telR?null:<p>手机号有误</p>}
              </li>
              <li>
                <input type="password" placeholder='输入密码' name='password' ref='pw' onChange={this.clearP}/>
                <span className='pw-ic'></span>
                {this.state.pwR?null:<p>请输入6-16位密码</p>}
                {this.state.pwT?null:<p>密码不正确</p>}
              </li>
            </ul>
            <div className='sign-btn'>
              <a href="/login/register" className='lost-password' onClick={this.goLost.bind(this,false)}>忘记密码</a>
              <a href="/login/register" className='sign-new' onClick={this.goLost.bind(this,true)}>新用户注册</a>
            </div>
            <div className='btn-login-container'>
              <a href='' className='btn-login' onClick={this.login}>登录</a>
              <a href="/login/school" className='link' id='aXwy'></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}