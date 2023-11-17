import DayToDo from './DayToDo';
import { useState } from 'react';
import Calendar from '../Calender';
import useMemosStore from '../StoreMemos';

function Day() {
    const { date, updateDate, pad } = useMemosStore();
    console.log(date);
    const dateString = date.toLocaleDateString(); // or date.toDateString()
    console.log(dateString);
    const parts = dateString.split('.'); // 문자열을 점(.)을 기준으로 분할
    console.log(parts);
    // 연, 월, 일을 추출하고 필요한 경우 두 자리로 패딩
    const year = parts[0];
    const month = parts[1].padStart(2, '0');
    const day = Number(parts[2]).pad();

    // "xxxx-xx-xx" 형식으로 변환
    const formattedDate = `${year}-${month}-${day}`;
    return (
        <div className="w-[704px] h-auto relative flex-column  justify-center items-center">
            <div className="w-[632px] h-[124px] pl-[68px] pr-[87px] left-[36px] top-[54px] absolute bg-gray-900 rounded-[10px] justify-start items-center inline-flex">
                <div className="w-[477px] h-6 text-center text-white text-[32px] font-bold font-['Noto Sans KR'] leading-[48px]">
                    {formattedDate}
                </div>
            </div>
            <div className="w-[632px] h-[500px] pl-[15px] pr-[34px] pt-[50px] pb-[124px] left-[36px] top-[204px] absolute bg-gray-900 rounded-[10px] flex-col justify-start items-center gap-[108px] inline-flex">
                <div className="w-[477px] h-6 text-center text-white text-[32px] font-bold font-['Noto Sans KR'] leading-[48px]">
                    오늘의 추천 일정
                </div>
                <DayToDo />
                <DayToDo />
                <DayToDo />
            </div>
        </div>
    );
}

export default Day;
