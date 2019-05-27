import React from 'react';
import { withRouter } from 'react-router-dom';
import './Post.css';

const post = (props) => {
    return (    
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    )
};

// 'withRouter' allows you to access the Route props (history, location, match) in the child components, 
// without having to explicitly pass those as props
export default withRouter(post);