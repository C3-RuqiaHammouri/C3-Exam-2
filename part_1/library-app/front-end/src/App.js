import React from "react";
import "./App.css";
import {BrowserRouter , Route} from "react-router-dom"
import Library from "./component/Library";
import {Link} from "react-dom"
import Navigation from "./component/Navigation";


const App = () => {
  return (
    <>

    <Navigation></Navigation>
      <h1>App Component</h1>
      <Route path ="/library" component ={Library} />
      
      
    </>
  );
};

export default App;
