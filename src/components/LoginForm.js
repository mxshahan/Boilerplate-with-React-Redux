import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginForm = ({startLogin}) => (
    <form role="form">
        <fieldset>
            <div className="form-group">
                <input className="form-control" placeholder="E-mail" name="email" type="email" autoFocus=""/>
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Password" name="password" type="password" value=""/>
            </div>
            <div className="checkbox">
                <label>
                    <input name="remember" type="checkbox" value="Remember Me"/>Remember Me
                </label>
            </div>
            <input type="submit" className="btn btn-primary" value="Login"/>
            <Link to="/signup">Create an Account</Link>
        </fieldset>
    </form>
);

export default LoginForm;