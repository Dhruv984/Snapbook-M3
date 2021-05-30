export const initialLoginState={
    userInfo:null
}

export const action_types={
    SET_LOGGED_IN:'SET_LOGGED_IN',
    SET_LOGGED_OUT:'SET_LOGGED_OUT'
}

export const Loginreducer=(state,action)=>{
    
    switch(action.type){
        case action_types.SET_LOGGED_IN:
            return {...state,userInfo:action.userInfo}
        case action_types.SET_LOGGED_OUT:
            return {...state, userInfo:null}
        default :
        return state
           
    }

}