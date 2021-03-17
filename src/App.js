import logo from './logo.svg';
import './App.css';
import {  Route, Switch } from 'react-router';
// import Main from "./route/Main";
import Home from "./containers/home/counter";
import Login from "./containers/login/login";
import Dashboard from "./containers/dashboard/dashboard";
import Register from "./containers/register/register";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= {Dashboard}/>
        <Route exact path='/home' component= {Home}/>
        <Route exact path='/login' component= {Login}/>
        <Route exact path='/register' component= {Register}/>
      </Switch>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
