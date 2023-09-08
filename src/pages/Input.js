import React, { useState } from "react";

const Input = () => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            <p>{text}</p>
        </div>
    );
};

export default Input;