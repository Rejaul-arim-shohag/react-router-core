import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let {id} = useParams();
    const [detail, setDetail] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>res.json())
        .then((data)=>setDetail(data))
    })

    return (
        <div>
            <h1>This is Friend Details {id}</h1>
            <h2>{detail.name}</h2>
            <h2>{detail.username}</h2>
            <h2>{detail.phone}</h2>
            <h2>{detail.website}</h2>
        </div>
    );
};

export default FriendDetail;