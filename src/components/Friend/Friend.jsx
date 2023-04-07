import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
    const {id, name, email, website} = friend;
    return (
        <div className='Friend'>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><Link to={`/friend/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default Friend;