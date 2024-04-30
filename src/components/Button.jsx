import React from "react";
import "../css/Button.css"

function Button({ count, onClick }) {
    return (
        <div className="button" onClick={onClick}>
            count is {count}
        </div>
    );
}

export default Button;