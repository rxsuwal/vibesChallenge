import * as actionType from './actionTypes'

export const register =(payload)=>{
    return{
        type:actionType.REGISTER,
        payload:payload
    }
}

export const loadData = (payload)=>{
    return{
        type:actionType.LOAD_DATA,
        payload:payload
    }
}

export const logout = ()=>{
    return{
        type:actionType.LOG_OUT
    }
}