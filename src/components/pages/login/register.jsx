import React,{Component} from 'react';
import Back from '../../common/back';

export default class Register extends Component{

  constructor() {
    super();
    this.state = {
      inputV:null,
      codeReal:'',
      telR:true,
      pwR:true,
      codeR:true,
      val:''
    };
  }

  codePost=()=>{   //获取验证码方法
    let tel=this.refs.telSign.value;
    if(!(/^1[34578]\d{9}$/.test(tel))){  //如果手机号不符合规则
      this.setState({telR:false});       //显示提示
      return;         //return
    }
    window.$$.ajax({
      url:'http://47.100.5.94/api/smscode',
      method:'get',
      data:{phone:tel},
      success:(data)=>{
        console.log(data);
        let dataObj=JSON.parse(data);
        this.setState({codeReal:dataObj.resource.verify_code});
      }
    });
  };

  sign=()=>{    //注册方法
    let tel=this.refs.telSign.value;
    let code=this.refs.codeSign.value;
    let pw=this.refs.pwSign.value;
    if(!(/^1[34578]\d{9}$/.test(tel))){  //如果手机号不符合规则
      this.setState({telR:false});       //显示提示
      return;         //return
    }
    if(!(/^[a-z0-9]{6,16}$/.test(pw))){  //如果密码不符合规则
      this.setState({pwR:false});        //显示提示
      return;         //return
    }
    this.state.codeReal==code?window.$$.ajax({   //验证码正确与否验证
      url:'http://47.100.5.94/api/register',
      method:'post',
      data:{phone:tel,password:pw},
      success:(data)=>{
        console.log(data);
      }
    }):this.setState({codeR:false});
  };

  clearP=(index)=>{  //清除code和password提示方法
    switch(index){
      case 1:this.setState({val:''});break;   //点x号删除手机号
      case 2:this.setState({codeR:true});break;
      case 3:this.setState({pwR:true});break;
    }
  };

  changeV=(e)=>{
    this.setState({val: e.target.value,telR:true});
  };

  render(){
    return(
      <div className='page' data-page='register'>
        <div className='page-content login-screen-content'>
          <Back/>
          {window.appStores.userStore.isSign.openSign?<div className='logo-ic'></div>:<h1 className='login-title sign-title'>验证手机号码</h1>}
          <div className='login-content sign-content'>
            <ul className='login-ul'>
              <li>
                <input type="number" placeholder='手机号' name='telNumber' onChange={this.changeV} ref='telSign' id='telNumber' value={this.state.vl}/>
                <span className='tel-ic' onClick={this.clearP.bind(this,1)}></span>
                {this.state.telR?null:<p>手机号有误</p>}
              </li>
              <li className='code-ct'>
                <input type="number" placeholder='验证码' name='code' onChange={this.clearP.bind(this,2)} ref='codeSign'/>
                <span onClick={this.codePost} className='codeGet'>获取验证码</span>
                {this.state.codeR?null:<p>验证码错误</p>}
              </li>
              <li>
                <input type="password" placeholder='密码' name='password' onChange={this.clearP.bind(this,3)} ref='pwSign'/>
                <span className='pw-ic'></span>
                {this.state.pwR?null:<p>请输入6-16位密码</p>}
              </li>
            </ul>
            {window.appStores.userStore.isSign.openSign?<p className='user-read'>注册代表您已阅读并同意&nbsp;<a href="">《最青春网络使用协议》</a></p>:null}
            <div className='btn-login-container'>
              <a href='' className='btn-login' onClick={this.sign}>{window.appStores.userStore.isSign.openSign?'注册':'下一步'}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}