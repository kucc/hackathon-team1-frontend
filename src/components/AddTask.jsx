import React, { useState, useEffect } from 'react';
import useMemosStore from '../StoreMemos';

function AddTask() {
    const { date, pad } = useMemosStore();
    const dateString = date.toLocaleDateString(); // or date.toDateString()
    const parts = dateString.split('.'); // 문자열을 점(.)을 기준으로 분할
    // 연, 월, 일을 추출하고 필요한 경우 두 자리로 패딩
    console.log(parts);
    const year = parts[0];
    const month = parts[1].replace(/\s+/g, '').padStart(2, '0');
    const day = parts[2].replace(/\s+/g, '').padStart(2, '0');

    // "xxxx-xx-xx" 형식으로 변환
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    const [eventName, setEventName] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState(0);
    const [tasks, setTasks] = useState([]); // 추가된 상태

    useEffect(() => {
        // 상태 변경에 따른 효과 (예: 서버에서 데이터를 가져오기)
    }, [tasks]); // tasks 배열이 변경될 때마다 useEffect 실행

    const handleRegister = () => {
        const data = {
            event_name: eventName,
            event_date: formattedDate,
            category: category,
            priority: priority,
        };
        console.log(data);
        fetch('https://2c98-106-101-129-129.ngrok-free.app/designated', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTasks((prevTasks) => [...prevTasks, data]); // tasks 상태 업데이트
            });
    };
    return (
        <div>
            <div className="w-[343px] h-[395px] relative bg-white rounded-[10px]">
                <div className="left-[24px] top-[36px] absolute text-center text-black text-base font-['SF Pro']">
                    루틴 일정 추가하기
                </div>
                <div className="w-[343px] h-[15px] left-0 top-0 absolute bg-indigo-500" />
                <div className="w-6 h-6 left-[297px] top-[31px] absolute justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch p-[3px] origin-top-left rotate-45 justify-center items-center inline-flex" />
                </div>
                <div className="left-[23px] top-[88px] absolute flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-center text-black text-sm font-normal font-['SF Pro']">
                        일정 이름
                    </div>
                    <input
                        className="event_name"
                        type="text"
                        placeholder="일정 이름을 입력하세요"
                        maxlength="20"
                        size="20"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    ></input>
                </div>
                <div className="left-[24px] top-[189px] absolute flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-center text-black text-sm font-normal font-['SF Pro']">
                        카테고리
                    </div>
                    <div className="justify-start items-center gap-[12px] inline-flex">
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="수업"
                                checked={category === '수업'}
                                onChange={(e) => setCategory(e.target.value)}
                            />{' '}
                            수업
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="시험"
                                checked={category === '시험'}
                                onChange={(e) => setCategory(e.target.value)}
                            />{' '}
                            시험
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="취미"
                                checked={category === '취미'}
                                onChange={(e) => setCategory(e.target.value)}
                            />{' '}
                            취미
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="자기계발"
                                checked={category === '자기계발'}
                                onChange={(e) => setCategory(e.target.value)}
                            />{' '}
                            자기계발
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="기타"
                                checked={category === '기타'}
                                onChange={(e) => setCategory(e.target.value)}
                            />{' '}
                            기타
                        </label>
                    </div>
                </div>
                <div className="left-[24px] top-[286px] absolute flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-center text-black text-sm font-normal font-['SF Pro']">
                        우선순위
                    </div>
                    <input
                        className="priority"
                        type="text"
                        placeholder="0~10까지 입력하세요"
                        maxlength="20"
                        size="20"
                        value={priority}
                        onChange={(e) => {
                            const numValue = parseInt(e.target.value, 10);
                            if (!isNaN(numValue)) {
                                setPriority(numValue);
                            } else if (e.target.value === '') {
                                setPriority(0); // 빈 문자열 입력 시 우선순위를 0으로 리셋
                            }
                        }}
                    ></input>
                    <div className="justify-start items-center gap-[27px] inline-flex"></div>
                </div>
            </div>
            <button className="register" onClick={handleRegister}>
                추가하기
            </button>
        </div>
    );
}

export default AddTask;
