import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-primary text-white border rounded p-4 w-75 mx-auto m-5'>
                <h2>
                What is the difference between Authorization and Authentication?
                </h2>
                <p>
                Authentication is the process of giving assurance in accordance with determining whether an act which is claimed to be correct is actually true. <br />
                On the other hand, Authorization is the process of giving someone permission to do something or to use a resource.
                </p>
            </div>
            <div className='bg-success text-white border rounded p-4 w-75 mx-auto m-5'>
                <h2>
                Why are you using firebase? What other options do you have to implement authentication?
                </h2>
                <p>
                Firebase helps us to develop and grow high quality apps. Each feature of it works independently and they work very user friendly together. 
                Some options to implement authentication: Auth0, OneLogin, Okta, Rippling, SecureAuth Identity Platform, ForgeRock etc.
                </p>
            </div>
            <div className='bg-danger text-white border rounded p-4 w-75 mx-auto m-5'>
                <h2>
                What other services does firebase provide other than authentication?
                </h2>
                <p>
                Firebase provide some other feature than authentication, they are create and implement Realtime Database, Storage, Hosting, Functions, Machine Learning, Firestore Database etc. Firebase simplify testing, triaging and troubleshooting of apps and carefully roll out features and monitor adoption. It also customize our app for different user segments. 
                </p>
            </div>
        </div>
    );
};

export default Blogs;