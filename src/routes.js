import Home from './components/pages/home';  //james
import Register from './components/pages/login/register';  //james
import LoginSchool from './components/pages/login/login-school';  //james
import Issue from './components/pages/issue';  //james

import DynamicCampus from './components/pages/dynamicCampus'; // <= 动态校园 wp
import Announcement from './components/pages/announcement'; // <= 公告 wp


const routes = [
  { path: '/home', component: Home },//james
  { path: '/login/register', component: Register },//james
  { path: '/login/school', component: LoginSchool },//james
  { path: '/issue', component: Issue },//james
  { path: '/dynamicCampus', component: DynamicCampus }, // <= wp
  { path: '/announcement', component: Announcement }, // <= wp
];

export default routes;
