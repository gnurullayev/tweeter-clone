import React, { createContext, useState } from 'react';

export const LoginCreatContext = createContext()

function LoginContext({children}) {

    const [isLogin, setLogin] = useState(localStorage.getItem("login"))
    return (
        <LoginCreatContext.Provider value={{isLogin, setLogin}}>
            {children}
        </LoginCreatContext.Provider>
    );
}

export default LoginContext;