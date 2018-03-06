import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <div>
        <h3>Error 404! - Page Not Found <Link to="/">Go Home</Link></h3>
    </div>
);
export default NotFound;