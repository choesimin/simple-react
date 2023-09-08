import React, { useState } from "react";

const Imputs = () => {
    const [texts, setTexts] = useState({
        name: "",
        email: "",
        tel: ""
    });

    const onChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setTexts({
            ...texts,
            [id]: value
        });    // spread(...)로 깊은 복사를 먼저 하고 값을 지정해야 react가 값이 변경된 것을 dlstlrgka
    };

    const { name, email, tel } = texts;

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <label>이메일</label>
                <input type="text" id="email" value={email} onChange={onChange} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="text" id="tel" value={tel} onChange={onChange} />
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    );
};

export default Imputs;