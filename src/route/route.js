import { Router, Route, Switch } from 'react-router';
import Home from "../containers/home/home";
import Login from "../containers/login/authLogin";
import Dashboard from "../containers/dashboard/dashboard";
import Register from "../containers/register/authRegister";
import Add from "../containers/option/addTask";
import Edit from "../containers/option/editTask";
import { GlobalProvider } from "../components/context/GlobalState";

export default function RouterCenter() {
  return (
    <div>
      {/* <GlobalProvider> */}
        {/* <Router> */}
          <Switch>
            <Route exact path='/' component= {Dashboard}/>
            <Route exact path='/home' component= {Home}/>
            <Route exact path='/login' component= {Login}/>
            <Route exact path='/register' component= {Register}/>
            <Route exact path = '/add' component={Add}/>
            <Route exact path = '/edit/:id' component={Edit}/>
          </Switch>
        {/* </Router> */}
      {/* </GlobalProvider> */}
    </div>
  );
}
