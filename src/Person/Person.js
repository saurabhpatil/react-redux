import React from 'react';
import { AST_PropAccess } from 'terser';

const person = (props) => {
    return (
        <div>
            <p>Name: {props.name} &ensp; Age: {props.age} &ensp; {props.children}</p>
        </div>
    )
};

export default person;