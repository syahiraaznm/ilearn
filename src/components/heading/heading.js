import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavbarBrand, Container} from 'reactstrap';

export default function Heading(props) {
    const [input, setInput] = useState ('');

    const handleChangeInput = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        // disable default on form btn
        e.preventDefault(); 
        props.onSubmit({
            // generate random id 
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');

    };

    return (
        <div style={{border: "1px solid pink"}}>
            {/* <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand href="/">Your Task</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link to="./add" className="btn btn-primary">+</Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar> */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add Task" 
                    value={input}
                    name="text" 
                    className="task-ipt" 
                    onChange={handleChangeInput}
                />
                <button onClick={handleSubmit} className="task-btn">+</button>
            </form>
        </div>
    )
}
