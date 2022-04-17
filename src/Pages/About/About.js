import React from 'react';
import './About.css'
import photo from '../../images/about/pp-1.jpg'

const About = () => {
    return (
        <div>
            <div  className='container mt-5 d-flex aboutUs'>
            <div>
                <h1 className='text-warning'>About Me</h1>
                <div>
                    <h2>Hi I'm Zobayed</h2>
                    <h6><span className='text-warning'>Engineer |  Junior Web Developer</span></h6>
                </div>
                <p>Hi.I am student at Dhaka International University(DIU) in CSE depertment.I am currently learning
                Programming Hero's Complete Web Development course.I am very passionate about my current learning
                period.Hope i can do better step by step.I wish to be a web developer in next six months.Wish me very
                good luck.Let's hope for the best.</p>
            </div>
            <div>
                <img className='photo rounded-circle' src={photo} alt="" />
            </div>
            </div>
        </div>
    );
};

export default About;