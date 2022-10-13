import React, { createContext, useState,useEffect } from 'react';

export const LoginCreatContext = createContext()

function LoginContext({children}) {

    const [isLogin, setLogin] = useState(localStorage.getItem("token") || "")

    useEffect(() => {
        if(isLogin) {
            localStorage.setItem("token", isLogin)
        }
        console.log(isLogin);
     }, [isLogin])
    return (
        <LoginCreatContext.Provider value={{isLogin, setLogin}}>
            {children}
        </LoginCreatContext.Provider>
    );
}

export default LoginContext;