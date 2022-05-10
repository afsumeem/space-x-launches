import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Launch = (props) => {
    const { mission_name, links, launch_year, launch_date_utc, rocket, launch_success, launch_failure_details } = props.launch;

    const nationality = rocket?.second_stage?.payloads.map(payload => payload.nationality)


    return (
        <Col md={3}>
            <Card>
                <Card.Img variant="top" src={links.mission_patch} />
                <Card.Body>
                    <Card.Title>{mission_name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>
                        {launch_success
                            ?
                            "Successfully Launched"
                            : `Launch Failed due to ${launch_failure_details?.reason}`
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        {nationality}
                    </small>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default Launch;