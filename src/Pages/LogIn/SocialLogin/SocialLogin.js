import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/Social/google.png';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }
    if (user) {
        navigate('/checkout');
    }
    return (
        <div>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn-info rounded text-white'>
                    <img src={google} className='mx-2' alt="" />
                    Sign Up with Google
                </button>
                {errorElement}
            </div>
            <div className='w-50 mx-auto d-flex align-items-center'>
                <div style={{ height: '1px', background: 'green', width: '50%' }} ></div>
                <p className='mt-3 px-2 text-success'>OR</p>
                <div style={{ height: '1px', background: 'green', width: '50%' }} ></div>
            </div>
        </div>
    );
};

export default SocialLogin;