import React from 'react';
import ReusableForm from '../ReusableForm/ReusableForm';
const ReusableWrapper = () => {
    const handleSignUp = data =>{
        console.log('sign Up', data);
    }
    const handleSignIn= data =>{
        console.log('sign In', data);
    }
    return (
        <div>
            <ReusableForm title='Sign Up' submitLabel='Submit'  onSubmit={handleSignUp} > 
                <h3>Welome to sign up page</h3>
            </ReusableForm>
            <ReusableForm title='Sign In' submitLabel='Sign In'  onSubmit={handleSignIn} >
            <h3>Welome to sign in page</h3>
            </ReusableForm>
        </div>
    );
};

export default ReusableWrapper;