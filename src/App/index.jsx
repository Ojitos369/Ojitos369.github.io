import React from 'react';
// import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { Main } from '../Components/Main';
import { Head } from '../Components/Head';
import { Menu } from '../Components/Menu';
import { MenuItem } from '../Components/Menu/MenuItem';
import { useMyContext } from './useMyContext';


function App() {
    const { 
        state, f,
        localState, lf,
    } = useMyContext();

    return (
        <div id="my-body" className={`${state.styles.styleClass}`}>
            <Head 
                s={state}/>
            <Menu 
                s={state}
                menuItem={item => 
                    <MenuItem 
                        item={item}
                        s={state}
                        f={f}
                        key={item.name}
                        />}
                />
            <div 
                className={`${state.styles.styleClass} ${state.styles.borderBottom}`}
                id = "separator-main"
                >
                </div>
            <button
                onClick={() => lf.changeTheme(localState, f)}>
                Change :3
            </button>
            <Main />
        </div>
    );
}

export default App;
