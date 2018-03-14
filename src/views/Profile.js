import React from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

const Profile = ({startLogout, ...props}) => (
    <div>
         <div className="span4 well">
            <div className="row">
                <div className="col-md-4">
                    {props.user.photoURL ? <img className="img-thumbnail" src={props.user.photoURL} alt=""/> : 
                    <img className="img-thumbnail" src="http://www.georeferencer.com/static/img/person.png" alt=""/>}
                    {props.user.displayName ?<h3> <strong>{props.user.displayName}</strong></h3> : 
                    <h3> <strong>Annonymous</strong></h3>}
                    <p><span className=" badge badge-warning"><i className="fa fa-email"></i> Email: {props.user.email}</span></p>
                    <button onClick={startLogout} className="btn btn-danger">Logout</button>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
});

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);