import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Launch = (props) => {
    const { mission_name, links, launch_year, launch_date_utc, rocket, launch_success, launch_failure_details } = props.launch;

    const nationality = rocket?.second_stage?.payloads.map(payload => payload.nationality)


    return (
        <Col md={4}>
            <Card className="me-3 ms-3 mb-3">
                <Card.Img variant="top" src={links.mission_patch} className="p-5" />
                <Card.Body>
                    <Card.Title className='text-center fw-bold fs-4 mb-4 text-primary text-uppercase'>{mission_name}</Card.Title>
                    <Card.Text>
                        <span className='fw-bold fs-5'> Launch year: </span>{launch_year} <br />
                        <span className='fw-bold fs-5'> Date:</span> {launch_date_utc} <br />
                        <span className='fw-bold fs-5'> Rocket Name:</span> {rocket.rocket_name}
                    </Card.Text>
                    <Card.Text className='text-center'>
                        {launch_success
                            ?
                            <span className='text-success fw-bold fs-5'>Successfully Launched</span>
                            : <span className='text-danger fw-bold fs-6'>Launch Failed due to {launch_failure_details?.reason}</span>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-end'>
                    <small className="text-muted">
                        {nationality}
                    </small>
                </Card.Footer>
            </Card>
        </Col >

    );
};

export default Launch;