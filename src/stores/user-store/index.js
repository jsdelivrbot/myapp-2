import { observable, action } from 'mobx';

class UserStore {

  @observable data = {
    realname: '',
    tel: '',
    // email: '',
    school: '',
    // clazz: '',
    // number: '',
    // small_avatar: '',
    // medium_avatar: '',
    // large_avatar: '',
    sex: ''
  };

  @action setData = (obj) => {
    let keys = Object.keys(obj);

    keys.forEach((key) => {
      obj[key] && (this.data[key] = obj[key]);
    });
    console.log(this.data);
  };

  @action delData = () => {
    this.data = {}
  };

  @observable isSign={  //保存跳转时是否跳转注册页
    openSign:true
  };

  @action changeIs=(is)=>{   //改变跳转页
    this.isSign.openSign=is;
  }
}
const userStore = new UserStore();

export default userStore;