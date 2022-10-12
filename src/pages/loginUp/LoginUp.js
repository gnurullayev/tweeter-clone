import React from 'react';
import "./loginUp.css"

function LoginUp(props) {
    return (
        <div>
            <div className='login-up'>
                <div className="login-up__content">
                    <p className="login-up__title">Create an account</p>

                    <form className='form'>
                        <input className='form__control' type="text" name="name" placeholder='Name'/>

                        <input className='form__control' type="tel" name="phone number" placeholder='Phone number'/>

                        <a className='link' href="#">Use email</a>

                        <p className='text1'>Date of birth</p>

                        <p className='text2'>
                            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
                        </p>
                        
                        <div className='form__monthDay'>
                            <input className='form__control form__month' type="number" name='Month' placeholder='Month'/>
                            <input className='form__control form__day' type="number" name='Day' placeholder='Day'/>
                            <input className='form__control form__year' type="number" name='Year' placeholder='Year'/>
                        </div>

                        <button className='btn form__btn'>Next</button>
                    </form>
                </div>        
            </div>
        </div>
    );
}

export default LoginUp;