import { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";


function App() {
  const [isLoggedin, setIsLoggedin ] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedin(true)
      }else{
        setIsLoggedin(false)
      }
      setInit(true)
    })
  },[])

  return (
  <>
    {init ? <AppRouter isLoggedin={isLoggedin}/> : "init..."}
    <footer>&copy; {new Date().getFullYear()} twitter</footer>
  </>
  )
}

export default App;
