const actionTypes = {
    localLoaded: 'LOCAL_LOADED',
    changeGeneralTheme: 'CHANGE_GENERAL_THEME',
}

const reducerObject =  (state, actionTypes, payload = null) => ({
    [actionTypes.localLoaded]: {
        ...state,
        localLoaded: true,
    },
    [actionTypes.changeGeneralTheme]: {
        ...state,
        styles: {
            ...state.styles,
            styleClass: payload,
        }
    }
})

const reducer = (state, action) => {
    const type = action.type;
    const payload = action.payload || null;

    if (reducerObject(state, actionTypes, payload)[type]) {
        return reducerObject(state, actionTypes, payload)[type];
    }
    return state;
}

class functions {
    constructor(dispatch) {
        this.dispatch = dispatch;
    }
    
    localLoaded = () => {
        this.dispatch({ type: actionTypes.localLoaded });
    }

    changeGeneralTheme = (classTheme) => {
        this.dispatch({ type: actionTypes.changeGeneralTheme, payload: classTheme });
    }
}

export { reducer, actionTypes, functions };