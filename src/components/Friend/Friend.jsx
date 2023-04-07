import React from 'react';
import './Friend.css';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, email } = friend;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/friend/${id}`);
    }

    return (
        <div className='Friend'>
            <h3>{name}</h3>
            <p>{email}</p>
            {/* <p><Link to={`/friend/${id}`}>Show Details</Link></p> */}
            {/* <Link to={`/friend/${id}`}><button>Show Details</button></Link> */}
            <button className='btn-details' onClick={handleNavigation}>Show Details</button>
        </div>
    );
};

export default Friend;