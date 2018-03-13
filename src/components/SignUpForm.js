import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

class SignUpForm extends React.Component{
    state = {
        email: '',
        cemail: '',
        pass: '',
        cpass: '',
        eErr: false,
        ceErr: false,
        pErr: false,
        cpErr: false
    }

    onSubmitSignUp = (e) => {
        e.preventDefault();
        const {cemail, cpass} = this.state;
        this.props.onSubmitSignUp(cemail, cpass);
    }

    emailChangeHandler = (e) => {
        let email = e.target.value;
        if(!email){
            this.setState({eErr: 'Email Field Should Not Empty'});
        }else{
            this.setState({
                email,
                eErr: false
            });
        }
    }

    confirmEmailHandler = (e) => {
        let cemail = e.target.value;
        if(!cemail){
            this.setState({ceErr: 'Confirm Email Field Should Not Empty'})            
        }
        else if(this.state.email != cemail){
            this.setState({ceErr: 'Email Mismatch'})
        }else{
            this.setState({
                cemail,
                ceErr: false
            })
        }
    }

    passChangeHandler = (e) => {
        let pass = e.target.value;
        if(!pass){
            this.setState({
                pErr: 'Password Field Should Not Empty'
            })
        }else{
            this.setState({
                pass,
                pErr: false
            })
        }
    }

    confirmPassHandler = (e) => {
        let cpass = e.target.value;
        if(!cpass){
            this.setState({cpErr: 'Password Field Should Not Empty'});
        }else if(this.state.pass != cpass){
            this.setState({cpErr: 'Password Mismatch'});
        }
        else{
            this.setState({
                cpass,
                cpErr: false
            })
        }
    }

    render(){
        return(
            <form role="form" onSubmit={this.onSubmitSignUp}>
                <fieldset>
                    <div className="form-group">
                        <input className="form-control" placeholder="E-mail" name="email" type="email" onBlur={this.emailChangeHandler}/>
                    </div>
                    {this.state.eErr && <p className="text text-danger">{this.state.eErr}</p>}
                    
                    <div className="form-group">
                        <input className="form-control" placeholder="Confirm E-mail" name="cemail" type="email" onBlur={this.confirmEmailHandler}/>
                    </div>
                    {this.state.ceErr && <p className="text text-danger">{this.state.ceErr}</p>}

                    <div className="form-group">
                        <input className="form-control" placeholder="Password" name="pass" type="password" onBlur={this.passChangeHandler}/>
                    </div>
                    {this.state.pErr && <p className="text text-danger">{this.state.pErr}</p>}
                    
                    <div className="form-group">
                        <input className="form-control" placeholder="Confirm Password" name="cpass" type="password" onBlur={this.confirmPassHandler}/>
                    </div>
                    {this.state.cpErr && <p className="text text-danger">{this.state.cpErr}</p>}
                    
                    <div className="checkbox">
                        <label>
                            <input name="remember" type="checkbox" value="Remember Me"/>I accept the terms and conditions
                        </label>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Sign Up"/>
                    <Link to="/login">Already have an Account</Link>
                    
                </fieldset>
            </form>
        )
    }
}

export default SignUpForm;