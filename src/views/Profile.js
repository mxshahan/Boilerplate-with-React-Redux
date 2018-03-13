import React from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

const Profile = ({startLogout}) => (
    <div>
         <button onClick={startLogout} className="btn-btn-danger">Logout</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
})

export default connect(undefined, mapDispatchToProps)(Profile);