import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

export default class NavSite extends React.Component {
    render(){
        return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="read">Read</Nav.Link>
                        <Nav.Link href="create">Create</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        )
        
    }
}