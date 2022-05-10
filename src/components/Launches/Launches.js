import React, { useEffect } from 'react';
import { loadLaunches } from "../../store/launchReducer";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import Launch from '../Launch/Launch';

const Launches = () => {
    const dispatch = useDispatch();

    // Getting all launches from store
    const allLaunches = useSelector(
        (state) => state.launches.allLaunches
    );
    console.log(allLaunches);

    useEffect(() => {
        dispatch(loadLaunches());
    }, []);

    return (
        <>
            <Container>
                <Row>

                    {
                        allLaunches.map(launch => <Launch
                            key={launch.flight_number}
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