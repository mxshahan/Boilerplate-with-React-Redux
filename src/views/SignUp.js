import React from 'react';
import {connect} from 'react-redux';
import {startLogin, createNewUserWithEmailAndPassword} from '../actions/auth';
import SignUpForm from '../components/SignUpForm';
import '../styles/styles.scss';
import '../styles/base/Login.scss';
import { firebase } from '../firebase/firebase';



const SignUp = ({createNewUserWithEmailAndPassword, ...props}) => (
    <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div className="login-panel panel panel-default">
                <div className="panel-heading">Log in</div>
                <div className="panel-body">
                    <SignUpForm onSubmitSignUp={( email, pass ) => {
                        createNewUserWithEmailAndPassword(email, pass);
                        props.history.push('/');
                    }}/>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    createNewUserWithEmailAndPassword: (email, pass) => dispatch(createNewUserWithEmailAndPassword(email, pass))
})

export default connect(undefined, mapDispatchToProps)(SignUp);