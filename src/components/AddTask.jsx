function AddTask() {
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
                    ></input>
                </div>
                <div className="left-[24px] top-[189px] absolute flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-center text-black text-sm font-normal font-['SF Pro']">
                        카테고리
                    </div>
                    <div className="justify-start items-center gap-[27px] inline-flex">
                        <button className="p-3 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-center text-black text-base font-normal font-['SF Pro']">
                                수업
                            </div>
                        </button>
                        <button className="p-3 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-center text-black text-base font-normal font-['SF Pro']">
                                시험
                            </div>
                        </button>
                        <button className="p-3 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-center text-black text-base font-normal font-['SF Pro']">
                                자기계발
                            </div>
                        </button>
                        <button className="p-3 rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-center text-black text-base font-normal font-['SF Pro']">
                                취미
                            </div>
                        </button>
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
                    ></input>
                    <div className="justify-start items-center gap-[27px] inline-flex"></div>
                </div>
            </div>
            <button>추가하기</button>
        </div>
    );
}

export default AddTask;
