export const initialState={
    imageCapture:null,
}

export const action_types={
    SET_IMAGE:'SET_IMAGE',
    RESET_IMAGE:'RESET_IMAGE'
}

export const reducer=(state,action)=>{
    
    switch(action.type){
        case action_types.SET_IMAGE:
            return {...state, imageCapture:action.imageCapture}
        case action_types.RESET_IMAGE:
            return {...state, imageCapture:null}
        default :
        return state
           
    }

}