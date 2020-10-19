import React from 'react';

function About () {
    return(
        <section className ="my-5">
            <h1 id="about">About Me</h1>
            <img src = {require('../../assets/images/small/Headshot.jpg')} alt="headshot"/>
            <p>
                Mike is currently the manager for Nursing Operations for HCA Heathcare. Prior to entering nursing operations, Mike was a part of the Clinical Excellence team at HCA.
                As a part of Clinical Excellence, Mike led the strategy and execution of various clinical initiatives with a primary focus on surgical services and pain management programs.
                Mike graduated from Vanderbilt University witha Vachelor's degree in Corporate Management and Economics and received his Masters of Business Administration from Belmont University in 2019. 
            </p>
        </section>
    );
}

export default About;