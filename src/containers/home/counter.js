import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 0 },
        ]
     };
     handleDelete = counterId => {
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        this.setState({counters});
     };
     handleReset = () => {
        // const counters = this.state.counters.map(c => {
        //     c.value = 0;
        //     return c;
        // });
        // this.setState({counters});
     };
     handleIncrement = counter => {
         const counters = [...this.state.counters];
        //  counter[0] = {...counter};
         counters[0].value++;
         console.log(this.state.counters[0]);
        // this.setState({value: this.state.value + 1});
    };
    render() { 
        return ( 
            <div style ={{height: "100vh", display:"flex", justifyContent: "center", margin: "auto", alignItems: "center"}}>
                {/* <button onClick= {this.handleReset} className="btn btn-primary btn-sm m-2">reset</button>
                {this.state.counters.map(counter => 
                    <Home
                        key = {counter.id}
                        counter = {counter}
                        onDelete = {this.handleDelete}
                        onIncrement = {this.handleIncrement}
                    />
                )} */}
                
                <span>home</span>
            </div>
         );
    }
}
 
export default Counter;