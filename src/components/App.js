import { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";


function App() {
  const [isLoggedin, setIsLoggedin ] = useState(authService.currentUser);
  return (
  <>
    <AppRouter isLoggedin={isLoggedin}/>
    <footer>&copy; {new Date().getFullYear()} twitter</footer>
  </>
  )
}

export default App;
