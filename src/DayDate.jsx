import React, { useState, useEffect } from 'react';

function DayDate({ date }) {
    const [userDate, setUserDate] = useState([]);
    console.log(date);
    console.log(`https://62b7-128-134-157-9.ngrok-free.app/daily/${date}`);

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
                    `https://62b7-128-134-157-9.ngrok-free.app/daily/${date}`,
                    requestOptions
                );
                const jsonData = await response.json();
                setUserDate(jsonData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-[400px] h-1 relative flex justify-center item-center">
            <ul className="text-center text-white text-[32px] font-bold font-['Noto Sans KR'] leading-[48px]">
                {userDate.map((user) => (
                    <li key={user.id}>{user.event_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default DayDate;
