
class Actions {
  fmtDate(ls){
    let date =  new Date(ls*1000);
    let y = 1900+date.getYear();
    let m = "0"+(date.getMonth()+1);
    let d = "0"+date.getDate();
    return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
  }
  dateC(ns){  //时间戳转换时间格式
    let date;
    ns==undefined ? date = new Date() : date = new Date(ns*1000);
    let seperator1 = "/",seperator2 = ":";
    let month = date.getMonth()+1 , strDate = date.getDate();
    let hours=date.getHours() , minutes=date.getMinutes();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (hours >= 0 && hours <= 9) {
      hours = "0" + hours;
    }
    if (minutes >= 0 && minutes <= 9) {
      minutes = "0" + minutes;
    }
    if(this.fmtDate(date)==this.fmtDate(new Date())){ //判断是否是当天
      let time = hours + seperator2 + minutes;
      return time;  //格式 15:00
    }
    if(date.getFullYear()==(new Date()).getFullYear()){ //判断是否是当年
      let time = month + seperator1 + strDate;
      return time;  //格式 08/08
    }
    else{
      let time = date.getFullYear() + seperator1 + month + seperator1 + strDate;
      return time;  //格式 2015/08/08
    }
  }
}
let actions=new Actions();
export default actions;