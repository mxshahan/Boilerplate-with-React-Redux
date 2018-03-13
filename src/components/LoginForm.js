import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

class LoginForm extends React.Component{
    state = {
        email: '',
        pass: ''
    }

    handleLogin = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        this.props.handleLogin(email.value, password.value);
    }

    render(){
        return(
            <form role="form" onSubmit={this.handleLogin}>
                <fieldset>
                    <div className="form-group">
                        <input className="form-control" placeholder="E-mail" name="email" type="email" autoFocus=""/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Password" name="password" type="password"/>
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
        )
    }
}

export default LoginForm;