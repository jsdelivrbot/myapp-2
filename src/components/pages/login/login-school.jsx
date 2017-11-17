import React,{Component} from 'react';
import stuS from '../../../assets/img/login/student_selected.png';
import tecS from '../../../assets/img/login/teacher_selected.png';
import stuN from '../../../assets/img/login/student_normal.png';
import tecN from '../../../assets/img/login/teacher_normal.png';
import Back from '../../common/back';

export default class LoginSchool extends Component{

  constructor() {
    super();
    this.state = {
      code:'',
      val:'',
      school:'',
      showSchool:false,
      open:false
    };
  }

  select=(index)=>{
    switch (index){
      case 1:
        this.refs.stu.src=stuS;
        this.refs.tec.src=tecN;
        break;
      case 2:
        this.refs.stu.src=stuN;
        this.refs.tec.src=tecS;
        break;
    }
  };

  schoolSel=()=>{
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
    for (let key of obj ){
      let o={};
      o.sn=key.n;
      intro.push(o);
    }
    this.setState({school:intro});
    this.setState({showSchool:true});
    this.setState({open:true});
  };

  changeV=(e)=>{
    this.setState({code: e.target.value});
  };

  changeS=(e)=>{
    this.setState({val: e.target.value});
  };

  render(){
    return(
      <div className='page' data-page='register'>
        <div className='page-content login-screen-content'>
          <Back/>
          <div className='select-sot'>
            <img src={stuS} alt="我是学生" ref='stu' onClick={this.select.bind(this,1)}/>
            <img src={tecN} alt="我是教师" ref='tec' onClick={this.select.bind(this,2)}/>
          </div>
          <div className='login-content sign-content'>
            <ul className='login-ul'>
              <li>
                <input type="number" placeholder='选择学校' name='schoolName' onChange={this.changeS} value={this.state.val}/>
                <span className='select-school' onClick={this.schoolSel}></span>
                <ul className={this.state.open?'openXwy list-school':'list-school'}>
                  {
                    this.state.showSchool?(this.state.school.map((e)=>{
                      return <li>{e.sn}</li>
                    })):null
                  }
                </ul>
              </li>
              <li className='code-ct'>
                <input type="number" placeholder='学号' name='code' onChange={this.changeV} value={this.state.code}/>
                <span className='tel-ic' onClick={()=>this.setState({code:''})}></span>
              </li>
              <li>
                <input type="password" placeholder='教务密码' name='teacherPw'/>
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