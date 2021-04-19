import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';
import Heading from "../heading/heading";

export default function List() {
    const [task, setTask] = useState([]);

    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)) {
            return;
        }

        const newTask = [task, ...task];

        setTask(newTask);
        console.log(task);
    };

    return (
        <div>
            <h1>What your task today?</h1>
            <Heading onSubmit={addTask} />
            {/* <ListGroup className= "mt-4">
                <ListGroupItem className="d-flex">
                    <h4>Task O N E</h4>
                    <div className="ml-auto">
                        <Link className="btn btn-warning mr-1" to="./edit/1">edit</Link>
                        <Button color="danger"> x</Button>
                    </div>
                </ListGroupItem>
            </ListGroup> */}
        </div>
    )
}
