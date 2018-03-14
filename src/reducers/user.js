export default (state = {}, action) => {
    switch(action.type){
        case 'SET_USER':
            return state = action.userData
        case 'REMOVE_USER':
            state = {}
        default:
            return state;
    }
}