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

    // upcoming launches
    const [upcomingLaunch, setUpcomingLaunch] = useState(allLaunches)
    const [upcomingBtn, setUpcomingBtn] = useState('')

    const handleUpcomingLaunches = (e) => {
        setUpcomingBtn(e.target.value)
        const matchedUpcomingLaunch = allLaunches.filter(launches => launches?.upcoming != null)
        const upcomingLaunches = matchedUpcomingLaunch.filter(launch => launch.upcoming.toString().includes(upcomingBtn))
        setUpcomingLaunch(upcomingLaunches)
    }

    // launch year
    const [launchYear, setLaunchYear] = useState('')
    const [selectedLaunchYear, setSelectedLaunchYear] = useState(allLaunches)

    const handleLaunchYear = (e) => {
        setLaunchYear(e.target.value)
        const rocketLaunchYear = allLaunches.filter(launch => launch.launch_year.toString().includes(launchYear))
        setSelectedLaunchYear(rocketLaunchYear)
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
                                <select onChange={(e) => handleLaunchYear(e)
                                }>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2010">2010</option>
                                    <option value="2012">2012</option>
                                    <option value="2013">2013</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2014">2014</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2009">2009</option>
                                </select>

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
                                            launchYear ?
                                                selectedLaunchYear.map(launch => <Launch
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