import { useContext } from "react";
import {Routes,Route,Navigate} from "react-router-dom";
import { LoginCreatContext } from "./context/LoginContext";
import Aside from "./components/aside";
import LoginIn from "./pages/loginIn/LoginIn";
import LoginUp from "./pages/loginUp/LoginUp";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main";


function App() {
  const {isLogin} = useContext(LoginCreatContext)
 

  return (
    <div className="App container">
      {
        !isLogin 
        ?
        (<Routes>
          <Route path="/loginIn" element = { <LoginIn/>}/> 
          <Route path="/signUp" element = { <LoginUp/>}/> 
          <Route path="*" element = { <Navigate to = "/loginIn"/>}/>
        </Routes>)
        :
        (
          <div className="content ">
            <Sidebar/>
            <Main/>
            <Aside/>
          </div>
        )

      }
      
    </div>
  );
}

export default App;
