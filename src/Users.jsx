import React, { useState, useEffect } from 'react';

function User() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // 요청 헤더에 추가할 옵션 객체를 생성
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': '69420',
            },
        };

        // 위에서 제공한 데이터를 useState를 사용하여 상태 변수에 저장
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://62b7-128-134-157-9.ngrok-free.app/test',
                    requestOptions
                );
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>User 정보</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        이름: {user.name}, 나이: {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default User;
