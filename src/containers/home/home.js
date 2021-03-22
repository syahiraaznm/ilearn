import React from 'react';

export default function Home() {

    // formatCount() {
    //     const { value } = this.props.counter;
    //     return value === 0 ? 
    //     'Zero' 
    //     : 
    //     value;
    // }
    // getBadgeClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += (this.props.counter.value === 0) ? "warning" : "primary";
    //     return classes;
    // }
    // renderTags() {
    //     if (this.state.tags.length === 0) 
    //         return <p>Nothing here</p>;
            
         
    //     return <ul>{this.state.tags.map ((tag, index) => <li key= {index}>{tag}</li>)}</ul>;
    // }
        return ( 
            <div style ={{height: "100vh", display:"flex", justifyContent: "center", margin: "auto"}}>
                {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick= {() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
                <button onClick= {() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">X</button> */}
                <span>welcome homeeeeeeee</span>
            </div>
        );
}
