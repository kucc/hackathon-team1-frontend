function DayToDo() {
    return (
        <div className="w-[400px] h-1 relative flex justify-center item-center">
            <div className="text-center text-white text-[32px] font-bold font-['Noto Sans KR'] leading-[48px]">
                고체 역학 시험 공부
            </div>
            <input
                type="checkbox"
                className="w-[60px] h-6 text-center text-white text-[32px] font-bold font-['Noto Sans KR'] leading-[48px]"
            ></input>
        </div>
    );
}

export default DayToDo;
