import React, { useContext } from 'react';
import {Link} from "react-router-dom"
import { LoginCreatContext } from '../../context/LoginContext';
import "./loginIn.css"

function LoginIn() {
    const {setLogin} = useContext(LoginCreatContext)

    const changeLogin = (e) => {
        e.preventDefault()
        
        setLogin(true)
        localStorage.setItem("login", true)
    }

    return (
        <div className='login-in'>
            <div className="login-in__content">
                <p className="login-in__title">Log in to Twitter</p>

                <form className='form' onSubmit={changeLogin}>
                    <input className='form__control' type="email" name="email" placeholder='Phone number, email address'/>
                    <input className='form__control' type="password" name="password" placeholder='Password'/>
                    <button className='btn form__btn' type='submit'>Login in</button>
                </form>

                <div className="login-in__footer">
                    <a className='form__link' href="#">Forgot password?</a>
                    <Link className='form__link' to="/signUp">Sign up to Twitter</Link>
                </div>
            </div>        
        </div>
    );
}

export default LoginIn;