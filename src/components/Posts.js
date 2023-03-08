import React from 'react';
import {useParams} from "react-router-dom";

const Posts = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>Post # {params.id}</h1>
            <h2>Автор: {params.name}</h2>
        </div>
    );
};

export default Posts;
