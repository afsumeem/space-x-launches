import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Launch from '../Launch/Launch';

const Launches = ({ allLaunches, displayedRocket, setInputValue, inputValue, setButtonValue, buttonValue }) => {
    const [successfulLaunch, setSuccessfulLaunch] = useState(allLaunches)


    const handleClick = (e) => {
        setButtonValue(e.target.value)
        const matchedSuccessfulLaunch = allLaunches.filter(launches => launches?.launch_success != null)
        const successfulLaunches = matchedSuccessfulLaunch.filter(launch => launch.launch_success.toString().includes(buttonValue))
        setSuccessfulLaunch(successfulLaunches)

    }


    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md={2} className="bg-white">
                        <h4 className='text-center text-uppercase text-primary fw-bold mt-5'>Filters</h4>
                        <div className='mt-5 mb-5'>
                            <h5>Launch Year</h5>

                        </div>

                        <div>
                            <h5>Successful Launches</h5>
                            <div className='d-block m-auto w-100 ms-3 me-3'>
                                <Button onClick={handleClick} value="true" className='btn-success m-1'>Success</Button>
                                <Button onClick={handleClick} value="false" className='btn-danger'>Failed</Button>
                            </div>

                        </div>
                        <div>
                            <h4></h4>
                        </div>
                    </Col>
                    <Col md={10}>
                        <Row>
                            {
                                inputValue ? displayedRocket.map(launch => <Launch
                                    key={launch.mission_name}
                                    launch={launch}
                                >
                                </Launch>)
                                    : buttonValue ?
                                        successfulLaunch.map(launch => <Launch
                                            key={launch.mission_name}
                                            launch={launch}
                                        >
                                        </Launch>)
                                        :
                                        allLaunches.map(launch => <Launch
                                            key={launch.mission_name}
                                            launch={launch}
                                        >
                                        </Launch>)
                            }

                        </Row>

                    </Col>


                </Row>
            </Container>
        </>
    );
};

export default Launches;