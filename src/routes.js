import HomeMessage from './components/pages/home/home-message'; //james
import Home from './components/pages/home';  //james
import Discover from './components/pages/discover';  //james
import Register from './components/pages/login/register';  //james
import LoginSchool from './components/pages/login/login-school';  //james


const routes = [
  { path: '/home/message', component: HomeMessage },//james
  { path: '/home', component: Home },//james
  { path: '/discover', component: Discover },//james
  { path: '/login/register', component: Register },//james
  { path: '/login/school', component: LoginSchool },//james
];

export default routes;
