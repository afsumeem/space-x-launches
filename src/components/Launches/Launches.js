import React, { useState } from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import Launch from '../Launch/Launch';

const Launches = ({ allLaunches, displayedRocket, setInputValue, inputValue, setButtonValue, buttonValue }) => {
    const [successfulLaunch, setSuccessfulLaunch] = useState(allLaunches)

    const handleClick = (e) => {
        setButtonValue(e.target.value)
        const matchedSuccessfulLaunch = allLaunches.filter(launches => launches?.launch_success != null)
        const successfulLaunches = matchedSuccessfulLaunch.filter(launch => launch.launch_success.toString().includes(buttonValue))
        setSuccessfulLaunch(successfulLaunches)
    }


    const [upcomingLaunch, setUpcomingLaunch] = useState(allLaunches)
    const [upcomingBtn, setUpcomingBtn] = useState('')

    const handleUpcomingLaunches = (e) => {
        setUpcomingBtn(e.target.value)
        const matchedUpcomingLaunch = allLaunches.filter(launches => launches?.upcoming != null)
        const upcomingLaunches = matchedUpcomingLaunch.filter(launch => launch.upcoming.toString().includes(upcomingBtn))
        setUpcomingLaunch(upcomingLaunches)
    }


    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md={2} className="bg-white">
                        <h4 className='text-center text-uppercase text-primary fw-bold mt-5'>Filters</h4>
                        <div className='mt-5 mb-5'>
                            <h5>Launch Year</h5>
                            <div>
                                <DropdownButton id="dropdown-item-button" className='btn' title="Launch Year">
                                    <Dropdown.Item as="button">2008</Dropdown.Item>
                                    <Dropdown.Item as="button">2007</Dropdown.Item>
                                    <Dropdown.Item as="button">2006</Dropdown.Item>
                                    <Dropdown.Item as="button">2010</Dropdown.Item>
                                    <Dropdown.Item as="button">2012</Dropdown.Item>
                                    <Dropdown.Item as="button">2013</Dropdown.Item>
                                    <Dropdown.Item as="button">2014</Dropdown.Item>
                                    <Dropdown.Item as="button">2015</Dropdown.Item>
                                    <Dropdown.Item as="button">2016</Dropdown.Item>
                                    <Dropdown.Item as="button">2017</Dropdown.Item>
                                    <Dropdown.Item as="button">2018</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>

                        <div>
                            <h5>Successful Launches</h5>
                            <div className='d-block m-auto w-100'>
                                <Button onClick={handleClick} value="true" className='btn btn-success px-3 me-2'>Success</Button>
                                <Button onClick={handleClick} value="false" className='btn btn-danger px-3'>Failed</Button>
                            </div>
                        </div>


                        <div className='mt-5'>
                            <h5>Is it upcoming?</h5>
                            <div className='d-block m-auto w-100'>
                                <Button onClick={handleUpcomingLaunches} value="true" className='btn btn-success px-4 me-2'>Yes</Button>
                                <Button onClick={handleUpcomingLaunches} value="false" className='btn btn-danger px-4'>No</Button>
                            </div>
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
                                        upcomingBtn ?
                                            upcomingLaunch.map(launch => <Launch
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