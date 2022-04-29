import { useState } from "react";
import AppRouter from "./Router";
import fbase from "../fbase";


function App() {
  const [isLoggedin, setIsLoggedin ] = useState(true);
  return (
  <>
    <AppRouter isLoggedin/>
    <footer>&copy; {new Date().getFullYear()} twitter</footer>
  </>
  )
}

export default App;
