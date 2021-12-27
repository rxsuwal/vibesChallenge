import * as actionType from './actionTypes';

const initialState = {
    user:null,
    articles:null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

    case actionType.REGISTER:
        return { ...state, 
            user:action.payload}

    case actionType.LOAD_DATA:
        return{
            ...state,
            articles:action.payload
        }
    case actionType.LOG_OUT:
        return{
            ...state,
            user:null
        }

    default:
        return state
    }
}

export default reducer
