import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Launches from '../Launches/Launches';
import { loadLaunches } from "../../store/launchReducer";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('')
    const [buttonValue, setButtonValue] = useState("");

    // Getting all launches from store
    const allLaunches = useSelector(
        (state) => state.launches.allLaunches
    );

    const [displayedRocket, setDisplayedRocket] = useState(allLaunches)

    useEffect(() => {
        dispatch(loadLaunches());
    }, []);


    return (
        <>
            <Header
                allLaunches={allLaunches}
                displayedRocket={displayedRocket}
                setDisplayedRocket={setDisplayedRocket}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <Launches
                allLaunches={allLaunches}
                displayedRocket={displayedRocket}
                setDisplayedRocket={setDisplayedRocket}
                inputValue={inputValue}
                setInputValue={setInputValue}
                buttonValue={buttonValue}
                setButtonValue={setButtonValue}
            />
        </>
    );
};

export default Home;