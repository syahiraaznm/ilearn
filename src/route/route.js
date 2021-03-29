import {  Route, Switch } from 'react-router';
import Home from "../containers/home/counter";
import Login from "../containers/login/authLogin";
import Dashboard from "../containers/dashboard/dashboard";
import Register from "../containers/register/register";

export default function RouterCenter() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= {Dashboard}/>
        <Route exact path='/home' component= {Home}/>
        <Route exact path='/login' component= {Login}/>
        <Route exact path='/register' component= {Register}/>
      </Switch>
    </div>
  );
}
