import React, { Component } from 'react';
// eslint-disable-next-line
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import './NewPost/NewPost';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" 
                                activeClassName="custom-active"
                                activeStyle={{textDecoration: 'underline'}}>
                                    Home
                                </NavLink>
                            </li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                            
                            {/* Can allow you to use JS object */}
                            {/* The below code naviagtes to 'submit' section on the screen */}
                            {/* <li><Link to={{
                                    pathname: "/new-post",
                                    hash: "#submit",
                                    search: "?quick-submit=true"
                                }}>New Post</Link></li> */}
                        </ul>
                    </nav>
                </header>
                {/* 'Switch' loads only one route at a time, based on first matching route from the list */}
                <Switch>
                    {/* 'Guards' allow redirection based on IAM/Auth to block access to specific pages */}
                    {/* {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null} */}
                    
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/" exact render={() => <Posts />} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;