import React from 'react';
// import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { Main } from '../Components/Main';
import { Head } from '../Components/Head';
import { useMyContext } from './useMyContext';


function App() {
    const { 
        state, f,
        localState, lf,
    } = useMyContext();

    return (
        <div id="my-body" className={`${state.styles.styleClass}`}>
            <Head />
        </div>
    );
}

export default App;
