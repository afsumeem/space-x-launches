import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = ({ allLaunches, setDisplayedRocket, setInputValue, inputValue }) => {


    const handleRocketSearch = (e) => {

        e.preventDefault()
        const matchedRocket = allLaunches.filter(launches => launches.rocket.rocket_name.toLowerCase().includes(inputValue.toLowerCase()))
        setDisplayedRocket(matchedRocket);
    }

    return (
        <div>
            <Navbar bg="dark" expand="lg"  >
                <Container fluid>
                    <Navbar.Brand href="#" className='text-white fs-2 fw-bold'>SpaceX</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            {/* <Nav.Link href="#home" className='text-white ms-5'>Home</Nav.Link> */}

                        </Nav>
                        <Form className="d-flex" onSubmit={handleRocketSearch}>
                            <FormControl
                                onChange={(e) => setInputValue(e.target.value)}
                                type="search"
                                placeholder="Search Rocket"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button type='submit' variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;