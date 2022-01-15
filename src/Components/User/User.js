import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const User = (props) => {
    const {name, email, phone, id} = props.user;
    const userStyle = {width: '800PX', margin: "10px auto", border: "1px solid gray", padding: "10px", textAlign:"center"}
    // console.log(props)
    const navigate = useNavigate();
    const handleClick = (friendId)=>{
        navigate(`/friend/${friendId}`)
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <Link to={`friend/${id}`}><button>Details of {id}</button></Link>
            <button onClick={()=>handleClick(id)}>Click Me</button>
            
        </div>
    );
};

export default User;