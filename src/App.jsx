import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import "./css/App.css";
import reactLogo from "./assets/react-logo.svg";

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <Header />
            <div className="content">
                <h1>My first React App!</h1>
                <img src={reactLogo} alt="React logo" />
                <div className="buttons">
                    <Button count={count} onClick={handleClick} />
                    <Button count={count} onClick={handleClick} />
                </div>
            </div>
        </>
    );
}

export default App;