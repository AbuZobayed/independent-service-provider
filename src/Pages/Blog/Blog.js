import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-5 font-weight-bold'>Questions</h1>
            <div className='first-question mb-5'>
                <h3>Difference between authorization and authentication</h3>
                <p>The authorization is a process utilized in an app that helps in controlling the informational access and limiting actions performed by users. Similarly, authentication is a process to check if the user is allowed to access the information or perform any action.</p>
            </div>
            <div className='second-quesrion mb-5'>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase Authentication makes building secure sign-ins for any platform easy. This end-to-end solution supports email and passowrd, phone auth, & mult-platform login. For Mobile or Web Apps. Release Apps Confidently. Build Fast For Any Device.</p>
            </div>
            <div className='third-quesrion'>
                <h3>Difference between authorization and authentication</h3>
                <p>There are many services which Firebase provides, Most useful of them are:
                                    <ul>
                                         <li> Cloud Firestore.</li>
                                        <li>Cloud Functions.</li>
                                        <li>Authentication.</li>
                                        <li>Hosting.</li>
                                        <li>Cloud Storage.</li>
                                        <li> Google Analytics.</li>
                                        <li> Predictions.</li>
                                        <li>  Cloud Messaging.</li>

                                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blog;