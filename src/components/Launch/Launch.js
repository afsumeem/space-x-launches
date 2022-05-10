import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Launch = (props) => {
    const { mission_name } = props.launch;
    return (

        <Col md={4}>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{mission_name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default Launch;