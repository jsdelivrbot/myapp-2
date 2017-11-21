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

  codePost=(is)=>{   //获取验证码方法
    let tel=this.refs.telSign.value;
    if(!(/^1[34578]\d{9}$/.test(tel))){  //如果手机号不符合规则
      this.setState({telR:false});       //显示提示
      return;         //return
    }
    if(is){
      window.$$.ajax({
        url:'http://47.100.5.94/api/smscode',
        method:'get',
        dataType:'json',
        data:{phone:tel},
        success:(data)=>{
          console.log(data);
          this.setState({codeReal:data.resource.verify_code}); //保留验证码
        },
        error:()=>{
          console.log('err');
        }
      });
    }else {
      window.$$.ajax({
        url:'http://47.100.5.94/api/smsbackcode',
        method:'get',
        dataType:'json',
        data:{phone:tel},
        success:(data)=>{
          console.log(data);
          this.setState({codeReal:data.resource.verify_code}); //保留验证码
        },
        error:()=>{
          console.log('err');
        }
      });
    }
  };

  sign=(is)=>{    //注册方法
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
    if(is){
      this.state.codeReal==code?window.$$.ajax({   //验证码正确与否验证
        url:'http://47.100.5.94/api/register',
        method:'post',
        dataType:'json',
        data:{phone:tel,password:pw},
        success:(data)=>{
          console.log(data);
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
            localStorage.setItem('token_death',now);
            //修改状态变为第一次绑定
            window.appStores.userStore.changeF(true);
            //跳转
            setTimeout(()=>window.$$('#aXwy')[0].click(),500);
          }
        }
      }):this.setState({codeR:false});
    }else {
      this.state.codeReal==code?window.$$.ajax({   //验证码正确与否验证
        url:'http://47.100.5.94/api/smsbackcode',
        method:'post',
        dataType:'json',
        data:{phone:tel,password:pw},
        success:(data)=>{
          console.log(data);
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
            localStorage.setItem('token_death',now);
            //修改状态变为第一次绑定
            window.appStores.userStore.changeF(true);
            //跳转
            setTimeout(()=>window.$$('#aXwy')[0].click(),500);
          }
        }
      }):this.setState({codeR:false});
    }
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
                <span onClick={(is)=>this.codePost(window.appStores.userStore.isSign.openSign)} className='codeGet'>获取验证码</span>
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
              <a href='#' className='btn-login' onClick={(is)=>this.sign(window.appStores.userStore.isSign.openSign)}>{window.appStores.userStore.isSign.openSign?'注册':'下一步'}</a>
              <a href="/login/school" className='link' id='aXwy'></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}