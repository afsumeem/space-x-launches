import React, { useEffect } from 'react';
import { loadLaunches } from "../../store/launchReducer";
import { useDispatch, useSelector } from "react-redux";

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
            <h1>{allLaunches.length}</h1>
        </>
    );
};

export default Launches;