import React from "react";
import Header from "./components/Header";
import "./css/App.css";
import reactLogo from "./assets/react-logo.png";

function App() {
    return (
        <>
            <Header />
            <div className="content">
                <h1>My first React App!</h1>
                <img src={reactLogo} width="300" />
            </div>
        </>
    );
}

export default App;