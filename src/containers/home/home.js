import React from 'react';
import { useHistory } from "react-router-dom";
import List from "../../components/list/list";

export default function Home() {
    let history = useHistory();

    return ( 
        <div 
        style ={{height: "100vh", margin: "auto", alignItems: "center"}}
        >
            <List/> 
            {/* <span>welcome homeeeeeeee</span>
            <button onClick={()=>history.push("./add")}>Add</button> */}
        </div>
    );
}
