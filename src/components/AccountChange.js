import React, { useContext } from 'react';
import { LoginCreatContext } from '../context/LoginContext';
import style from "./AccountChange.module.css"

function AccountChange({setVisible}) {

    const {setLogin} = useContext(LoginCreatContext)

    window.addEventListener("click", (e) => {
        if(
            e.target.matches(`.${style.content}`) || 
            e.target.matches(`.${style.list}`) || 
            e.target.matches(`.${style.item}`)
        ){
            setVisible(true)
        }

        setVisible(false)
    })

    const logOutAccount = () => {
        setLogin("")
    }

    return (
        <div className= {style.content}>
            <ul className= {style.list}>
                <li className= {style.item}>Add an existing account</li>
                <li className= {style.item} onClick = {logOutAccount}>Log out Account</li>
            </ul>
        </div>
    );
}

export default AccountChange;