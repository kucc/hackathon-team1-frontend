import DayToDo from './DayToDo';

function Day() {
    return (
        <div className="w-[704px] h-auto relative flex-column  justify-center items-center">
            <div className="w-[632px] h-[124px] pl-[68px] pr-[87px] left-[36px] top-[54px] absolute bg-gray-900 rounded-[10px] justify-start items-center inline-flex">
                <div className="w-[477px] h-6 text-center text-white text-[32px] font-bold font-['Noto Sans KR'] leading-[48px]">
                    2023년 1월 30일
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
