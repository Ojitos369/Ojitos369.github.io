import React from "react";

function useLocalStorage(itemName, initialValue, f) {
    const [state, dispatch] = React.useReducer(reducer, initialValue);

    const {} = state;

    // Action creators
    const onSave = (newItem)=>dispatch({ type: actionTypes.save, payload: newItem});

    React.useEffect(()=>{
        setTimeout( ()=>{
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if(!localStorageItem) {
                localStorage.setItem(itemName,JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }
            onSave(parsedItem);
            f.localLoaded();
        } catch (error) {
            console.log(error);
        }
        },2000);
    },[]);

    const saveItem = (newItem) =>{
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName,stringifiedItem);
            onSave(newItem);
        } catch (error) {
            console.log(error);
        }
    }

    return [state, saveItem];
}

const actionTypes = {
    save: 'SAVE',
    changeTheme: 'CHANGE_THEME',
}

const reducerObject = (state, payload) =>({
    [actionTypes.save]:{
        ...payload
    },
    [actionTypes.changeTheme]:{
        ...payload
    }
});

const reducer = (state, action) =>{
    return reducerObject(state, action.payload)[action.type] || state;
}

class localFunctions {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }

    updateInput = (e, state) => {
        const value = e.target.value;
        let clone_state = {...state};
        clone_state.input = value;
        this.dispatch(clone_state);
    }

    changeTheme = (state, f) => {
        let clone_state = {...state};
        let classTheme = 'bg-dark text-light';
        let borderBottom = 'b-b-l';
        let border = 'border-light';
        let invertClassTheme = 'bg-light text-dark';
        let invertBorderBottom = 'b-b-d';
        let invertBorder = 'border-dark';


        if (state.themeMode === 'dark') {
            clone_state.themeMode = 'light';
            classTheme = 'bg-light text-dark';
            borderBottom = 'b-b-d';
            border = 'border-dark';
            invertClassTheme = 'bg-dark text-light';
            invertBorderBottom = 'b-b-d';
            invertBorder = 'border-dark';
        } else if (state.themeMode === 'light') {
            clone_state.themeMode = 'dark';
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
        this.dispatch(clone_state);
    }
}

export { useLocalStorage, localFunctions }