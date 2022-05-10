import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Launch from '../Launch/Launch';

const Launches = ({ allLaunches, displayedRocket, setInputValue, inputValue }) => {

    return (
        <>
            <Container>
                <Row>
                    {
                        inputValue ? displayedRocket.map(launch => <Launch
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
            </Container>
        </>
    );
};

export default Launches;