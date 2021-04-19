import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
export default function AddTask() {
    return ( 
        <div style ={{height: "100vh", display:"flex", justifyContent: "center", margin: "auto", alignItems: "center"}}>
            <Form>
                <FormGroup>
                    <Label>Task : </Label>
                    <Input type= "text" placeholder="Enter Task Name"></Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <Link to="/home" className= "btn btn-danger ml-2">Cancel</Link>
            </Form>
        </div>
    );
}
