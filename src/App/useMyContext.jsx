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
        }
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
        if (localState.themeMode === 'light') {
            classTheme = 'bg-light text-dark';
        }
        f.changeGeneralTheme(classTheme);
    },[state.localLoaded]);

    return {
        state, f,
        localState, lf,
    };
}


export { useMyContext };
