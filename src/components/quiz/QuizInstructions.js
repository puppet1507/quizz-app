import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const QuizInstructions = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Quiz Instruction - Quiz App</title>
            </Helmet>
            <div className="instructions container">
                <h1>How to play the Game</h1>
                <p>Make sure that you read this guide from start to finish.</p>
            </div>
            <h1 style={{ color: "black" }}>Hello from Instruction Page.</h1>
            <p>asd</p>
            <h1>Hello from Instruction Page.</h1>
            <h1>Hello from Instruction Page.</h1>
            <h1>Hello from Instruction Page.</h1>
        </Fragment>
    );
};

export default QuizInstructions;