const initialState= {
    message: "Follow Us"
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'Message change'){
        newState.message = 'Thank you for following'
    }
    return newState
}
export default reducer;