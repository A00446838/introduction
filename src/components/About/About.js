import React, { Component } from 'react'
import './About.css'

class About extends Component {

  render() {
    return (
      <div className="About">
        <img className="jelsonImg" src='jelson.JPG' alt='jelson' />
        <h2>Hi, I am Jelson</h2>
        <div className="intro"><p className="introPara">I am someone who Just Enjoys Learning Science Of Novelty.
        If one abbreviates the previous sentence, they get my name.
        I am from India and have completed my graduation in the field of Information Technology in the year 2017.
        I have an experience of 3 years as a Software Developer.
          Having started as a Frontend Developer, I broadened my interests in other domains too and am now proficient in them, be it the Backend or the Deployment.</p> </div>
        <div className="intro"><p className="introPara">As a child i always collected data in some form or the other. I always wanted to learn to implement various algorithms and study varios means to visulalized this data.
          With a view to lear them all, I have enrolled into the MCDA programe at SMU</p> </div>
      </div >

    );
  }
}

export default About;
