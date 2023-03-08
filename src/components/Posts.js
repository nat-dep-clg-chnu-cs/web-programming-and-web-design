import React from 'react';
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Card from "../shared/Card";

const Posts = () => {

    const status = 200

    const navigate = useNavigate()

    if (status === 404){
        return <Navigate to={'/pagenotfound'}/>
    }

    const onClick = () => {
        console.log('Hello')
        navigate('/about')
    }

    return (
        <Card>
            <h1>Post # </h1>
            <h2>Автор: </h2>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path='/show' element={<h1>Show post</h1>} />
            </Routes>
        </Card>
    );
};

export default Posts;
