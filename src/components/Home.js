import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

const Home = () => (
    <Fragment>
        <Helmet><title>Quizz App - Home </title></Helmet>
        <div id="home">
            <section>
                <div style={{textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1> Quizz App </h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to = "/play/instructions">play</Link></li>
                    </ul>
                </div>   

                <div className='auth-container'>
                    <Link to="/login" className="auth-buttons" id="login-button">login</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Register</Link>
                </div>             
            </section>
           
        </div>
    </Fragment>    
);

export default Home;