import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Experience = () => {
    return (
        <div>

           <Link to={`/expertise`}><Button color="inherit">Make Admin</Button></Link> 

        </div>
    );
};

export default Experience;