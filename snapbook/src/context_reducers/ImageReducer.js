export const initialState={
    imageCapture:null,
    selectedImage:null
}

export const action_types={
    SET_IMAGE:'SET_IMAGE',
    RESET_IMAGE:'RESET_IMAGE',
    SELECTED_IMAGE:'SELECTED_IMAGE',
    RESET_SELECTED_IMAGE:'RESET_SELECTED_IMAGE'
}

export const reducer=(state,action)=>{
    
    switch(action.type){
        case action_types.SET_IMAGE:
            return {...state, imageCapture:action.imageCapture}
        case action_types.RESET_IMAGE:
            return {...state, imageCapture:null}
        case action_types.SELECTED_IMAGE:
            return {...state,selectedImage:action.selectedImage}
        case action_types.RESET_SELECTED_IMAGE:
            return {...state,selectedImage:null}
        default :
        return state
           
    }

}