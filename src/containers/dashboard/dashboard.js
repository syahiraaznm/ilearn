import React, { Component } from 'react';

class Dashboard extends Component {

    render() { 
        return ( 
            <div>
                Welcome to i-Learn Application!
                <span>created by alyssaznm</span>
                <button 
                onClick={()=> this.props.history.push("/login")}>
                    Login
                </button>
                <button 
                onClick={()=> this.props.history.push("/register")}>
                    Register
                </button>
            </div>
         );
    }
}
 
export default Dashboard;