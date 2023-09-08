import React from "react";

const User = ({ userData }) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
};

const UserList = () => {
    const users = [
        { name: '사용자1', email: 'first@gmail.com' },
        { name: '사용자2', email: 'second@gmail.com' },
        { name: '사용자3', email: 'third@gmail.com' },
        { name: '사용자4', email: 'fourth@gmail.com' }
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    );
};

export default UserList;