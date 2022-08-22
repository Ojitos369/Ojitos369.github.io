import React from 'react';
// import axios from 'axios';
import { useLocalStorage, localFunctions } from './useLocalStorage';
import { reducer, functions } from './reducer';
import { useReducer } from './useReducer';

function useMyContext(){

    const initialState = {
        localLoaded: false,
        styles: {
            styleClass: 'bg-dark text-light',
            borderBottom: 'b-b-l',
            border: 'border-light',

            invertClassTheme: 'bg-light text-dark',
            invertBorderBottom: 'b-b-d',
            invertBorder: 'border-dark',
        },
        viewMode: 'Projects',
        optionsMenu: [
            {
                name: 'Projects', 
                value: 'Projects',
            },
            {
                name: 'About', 
                value: 'About',
            },
            {
                name: 'Skills', 
                value: 'Skills',
            },
            {
                name: 'Contact', 
                value: 'Contact',
            },
            {
                name: 'Settings', 
                value: 'Settings',
            },
        ]
    }
    const [state, dispatch] = useReducer({ reducer, initialState });
    const f = new functions(dispatch);

    const initialLocalState = {
        themeMode: 'dark'
    }
    const [localState, localDispatch] = useLocalStorage('ojitos369.com', initialLocalState, f);
    const lf = new localFunctions(localDispatch);
    localStorage.removeItem('localState');

    React.useEffect(()=>{
        let classTheme = 'bg-dark text-light';
        let borderBottom = 'b-b-l';
        let border = 'border-light';
        let invertClassTheme = 'bg-light text-dark';
        let invertBorderBottom = 'b-b-d';
        let invertBorder = 'border-dark';


        if (localState.themeMode === 'light') {
            classTheme = 'bg-light text-dark';
            borderBottom = 'b-b-d';
            border = 'border-dark';
            invertClassTheme = 'bg-dark text-light';
            invertBorderBottom = 'b-b-d';
            invertBorder = 'border-dark';
        }
        const newStyle = {
            ...state.styles,
            styleClass: classTheme,
            borderBottom: borderBottom,
            border: border,

            invertClassTheme: invertClassTheme,
            invertBorderBottom: invertBorderBottom,
            invertBorder: invertBorder,
        }
        f.changeGeneralTheme(newStyle);
    },[state.localLoaded]);

    return {
        state, f,
        localState, lf,
    };
}


export { useMyContext };
