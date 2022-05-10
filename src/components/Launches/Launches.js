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
            <Container>
                <Row>
                    <Col md={3} className="bg-white">
                        <h2>Filters</h2>
                        <div>
                            <h4>Launch Year</h4>

                        </div>

                        <div>
                            <h4>Successful Launch</h4>
                            <Button onClick={handleClick} value="true" className='m-1'>True</Button>
                            <Button onClick={handleClick} value="false">False</Button>
                        </div>
                        <div>
                            <h4></h4>
                        </div>
                    </Col>
                    <Col md={9}>
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