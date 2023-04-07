import React from 'react';
import "./FriendDetail.css";
import { useLoaderData } from 'react-router-dom';

const FreindsDetail = () => {
    const friend = useLoaderData();
    return (
        <div className='FriendDetails'>
            <h3>Everything About This Person Here:</h3>
            <h4>Name: {friend.name}</h4>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website: {friend.website} </p>
        </div>
    );
};

export default FreindsDetail;