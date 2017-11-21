import React,{Component} from 'react';
import stuS from '../../../assets/img/login/student_selected.png';
import tecS from '../../../assets/img/login/teacher_selected.png';
import stuN from '../../../assets/img/login/student_normal.png';
import tecN from '../../../assets/img/login/teacher_normal.png'; //角色选择
import Back from '../../common/back';

export default class LoginSchool extends Component{

  constructor() {
    super();
    this.state = {
      code:'',
      val:'',
      school:'',
      showSchool:false,
      open:false,
      sot:'student',
    };
  }

  select=(index)=>{      //身份选择
    switch (index){
      case 1:
        this.refs.stu.src=stuS;
        this.refs.tec.src=tecN;
        this.setState({sot:'student'});
        break;
      case 2:
        this.refs.stu.src=stuN;
        this.refs.tec.src=tecS;
        this.setState({sot:'teacher'});
        break;
    }
  };

  schoolSel=()=>{   //学校菜单下拉
    // window.$$.ajax({
    //   url:'',
    //   method:'post',
    //   data:{},
    //   dataType:'json',
    //   success:(data)=>{
    //     let obj=[{n:'杭州电子科技大学'},{n:'浙江工商大学'},{n:'中国传媒大学'}];
    //     let intro=[];
    //     for (let key of obj ){
    //       let o={};
    //       o.sn=key.n;
    //       intro.push(o);
    //     }
    //     this.setState({school:intro});
    //     this.setState({showSchool:true});
    //   }
    // })
    let obj=[{n:'杭州电子科技大学'},{n:'浙江工商大学'},{n:'中国传媒大学'},{n:'aaaa'},{n:'aaafdada'}];
    let intro=[];
    let count=0;
    for (let key of obj ){
      let o={};
      o.sn=key.n;
      o.key=++count;
      intro.push(o);
    }
    this.setState({school:intro});
    this.setState({showSchool:true});
    this.setState({open:!this.state.open});
  };

  put=(name)=>{   //选择学校方法
    this.setState({val: this.refs[name].innerHTML});
    this.setState({open:!this.state.open});
  };

  getAccess=()=>{
    window.$$.ajax({
      url:'http://47.100.5.94/api/gettoken',
      method:'post',
      dataType:'json',
      data:{token:localStorage.getItem('token')},
      success:(data)=>{
        let obj={tokenAccess:data.resource.access_token};
        localStorage.setItem('tokenAccess',obj.tokenAccess);
        window.appStores.userStore.setData(obj);
      }
    })
  };

  postIt=()=>{     //提交  mobx中isSign如果被改为'first'则为第一次绑定
    if(window.appStores.userStore.isSign.openSign=='first'){
      window.$$.ajax({
        url:'http://47.100.5.94/api/bind',
        method:'post',
        dataType:'json',
        data:{
          token:window.appStores.userStore.data.token,
          school_type:'yxy',
          user_type:this.state.sot,
          number:this.state.code,
          user_password:this.refs.userPw.value,
          phone:window.appStores.userStore.data.tel
        },
        success:(data)=>{
          console.log(data);
          if(data.errcode){
            this.getAccess();//获取accesstoken
            let obj={
              number:this.state.code,
              school:'yxy'
            };
            window.appStores.userStore.setData(obj);
            localStorage.setItem('number',obj.number);
            localStorage.setItem('school',obj.school);
            window.f7App.closeModal(window.loginScreen); //关闭登录view
          }
        }
      });
    }else {
      window.$$.ajax({
        url:'http://47.100.5.94/api/select/login',
        method:'post',
        dataType:'json',
        data:{
          token:window.appStores.userStore.data.token,
          school_type:'yxy',
          user_type:this.state.sot,
          number:this.state.code,
          user_password:this.refs.userPw.value
        },
        success:(data)=>{
          console.log(data);
          if(data.errcode){
            this.getAccess(); //获取accesstoken
            let obj={
              number:this.state.code,
              school:'yxy'
            };
            window.appStores.userStore.setData(obj);
            localStorage.setItem('number',obj.number);
            localStorage.setItem('school',obj.school);
            window.f7App.closeModal(window.loginScreen); //关闭登录view
          }
        }
      });
    }
  };

  changeV=(e)=>{
    this.setState({code: e.target.value});
  };

  changeS=(e)=>{
    this.setState({val: e.target.value});
  };

  render(){
    return(
      <div className='page' data-page='loginSchool'>
        <div className='page-content login-screen-content'>
          <Back/>
          <div className='select-sot'>
            <img src={stuS} alt="我是学生" ref='stu' onClick={this.select.bind(this,1)}/>
            <img src={tecN} alt="我是教师" ref='tec' onClick={this.select.bind(this,2)}/>
          </div>
          <div className='login-content sign-content'>
            <ul className='login-ul'>
              <li>
                <input type="text" placeholder='选择学校' name='schoolName' onChange={this.changeS} value={this.state.val}/>
                <span className='select-school' onClick={this.schoolSel}></span>
                <ul className={this.state.open?'openXwy list-school':'list-school'}>
                  {
                    this.state.showSchool?(this.state.school.map((e)=>{
                      return <li key={e.key} onClick={this.put.bind(this,(e.key).toString())} ref={(e.key).toString()}>{e.sn}</li>
                    })):null
                  }
                </ul>
              </li>
              <li className='code-ct'>
                <input type="number" placeholder='学号' name='code' onChange={this.changeV} value={this.state.code}/>
                <span className='tel-ic' onClick={()=>this.setState({code:''})}></span>
              </li>
              <li>
                <input type="password" placeholder='教务密码' name='userPw' ref='userPw'/>
                <span className='pw-ic'></span>
              </li>
            </ul>
            <div className='btn-login-container'>
              <a href='' className='btn-login' onClick={this.postIt}>提交</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}