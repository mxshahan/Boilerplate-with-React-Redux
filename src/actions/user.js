export const setUserData = (userData) => ({
    type: 'SET_USER',
    userData
});

export const removeUserData = () => ({
    type: 'REMOVE_USER'
})

// export const setUserData = (user_data={}) => {
//     return (dispatch) => {
//         // const {
//         //     uid = '',
//         //     email = '',
//         //     displayName = '',
//         //     photoURL = ''
//         // } = user_data;
//         // const userData = {uid, email, displayName, photoURL}
//         // console.log(userData)
//         dispatch(userData({user_data}))
//     }
// }

// export const removeUserData = () => {
//     return (dispatch) => {
//         dispatch(clearUserData())
//     }
// }