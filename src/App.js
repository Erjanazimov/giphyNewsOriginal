import React from 'react';
import "./css/Style.css"
import NavBar from "./components/navbar/NavBar";
import Router from "./router/Router";
const App = () => {
    return (
        <>
        <div className="container">
            <NavBar/>
        </div>
        <div>
            <Router/>
        </div>
        </>
    );
};

export default App;