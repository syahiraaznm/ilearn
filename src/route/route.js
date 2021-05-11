import { Router, Route, Switch } from 'react-router';
import Login from "../containers/login/authLogin";
import Dashboard from "../containers/dashboard/dashboard";
import Register from "../containers/register/authRegister";
import Footer from "../components/footer/footer";
import '../components/header/header.scss';

export default function RouterCenter() {
  return (
    <div className="rootBox">
      <div style ={{padding: "2% 5%"}}>
          {/* <Router> */}
            <Switch>
              <Route exact path='/' component= {Dashboard}/>
              <Route exact path='/login' component= {Login}/>
              <Route exact path='/register' component= {Register}/>
  
            </Switch>
          {/* </Router> */}
      </div>
      <Footer/>
    </div>
  );
}
