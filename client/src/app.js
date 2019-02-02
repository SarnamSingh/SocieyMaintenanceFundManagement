import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends Component{
render(){
    return (<Container>
        <Container>
        <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="#home">
                <img
                    src=""
                    className="d-inline-block align-top"
                   
                />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav  variant="tabs">
                    <Nav.Item>
                    <Nav.Link href="#home"  >Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#features">Features</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
        <br></br>
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        </Container>
    </Container>)
};
}
export default App