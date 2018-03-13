import {firebase, googleAuthProvider, facebookAuthProvider} from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogin = () => {
    // console.log('Hello')
    return (dispatch) => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            //Access Token
            const token = result.credential.accessToken;
            dispatch(login(token))
            //Signed in User Info
            const user = result.user;
        }).catch((e) => {
            console.log(e)
        })
    }
}

export const startLoginWithFacebook = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    }
}

export const startLoginWithEmailAndPass = () => {
    return () => {
        return firebase.auth().signInWithPopup()
    }
}

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}