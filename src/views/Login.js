import React from 'react';
import {connect} from 'react-redux';
import {startLogin, startLoginWithFacebook} from '../actions/auth';
// import LoginForm from '../components/LoginForm';
import '../styles/styles.scss';
import '../styles/base/Login.scss';


const Login = ({startLogin, startLoginWithFacebook}) => (
    <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div className="login-panel panel panel-default">
                <div className="panel-heading">Log in</div>
                <div className="panel-body">
                    <div className="social-btn">
                        <span className="btn btn-social btn-google" onClick={startLogin}>
                            <i className="fa fa-google"></i>&nbsp;Login with Google
                        </span>  
                   
                        {/* <span className="btn btn-social btn-facebook" onClick={startLoginWithFacebook}>
                            <i className="fa fa-facebook"></i>&nbsp;Login with Facebook
                        </span>                             */}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
})

export default connect(undefined, mapDispatchToProps)(Login);