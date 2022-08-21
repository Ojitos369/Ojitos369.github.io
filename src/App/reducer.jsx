const actionTypes = {
    localLoaded: 'LOCAL_LOADED',
    changeGeneralTheme: 'CHANGE_GENERAL_THEME',
    changeViewMode: 'CHANGE_VIEW_MODE',
}

const reducerObject =  (state, actionTypes, payload = null) => ({
    [actionTypes.localLoaded]: {
        ...state,
        localLoaded: true,
    },
    [actionTypes.changeGeneralTheme]: {
        ...state,
        styles: payload,
    },
    [actionTypes.changeViewMode]: {
        ...state,
        viewMode: payload,
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

    changeGeneralTheme = (newStyle) => {
        this.dispatch({ type: actionTypes.changeGeneralTheme, payload: newStyle });
    }

    changeViewMode = (newViewMode) => {
        this.dispatch({ type: actionTypes.changeViewMode, payload: newViewMode });
    }
}

export { reducer, actionTypes, functions };