import { useState } from 'react';
function Gpt() {
    const [question, setQuestion] = useState('');
    const handleGpt = () => {
        const data = {
            question: { question },
        };
        fetch('https://2c98-106-101-129-129.ngrok-free.app/gpt/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };
    return (
        <div className="w-[343px] h-[263px] relative bg-white rounded-[10px]">
            <div className="w-[343px] h-[15px] left-0 top-0 absolute bg-indigo-500" />
            <div className="left-[23px] top-[30px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[298px] h-[100px] px-2.5 py-4 bg-gray-100 rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-black text-sm font-normal font-['SF Pro']">
                        지피티
                    </div>
                </div>
                <div className="w-[298px] px-2.5 py-4 bg-gray-100 rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <textarea
                        className="text-center text-black text-sm font-normal font-['SF Pro']"
                        rows="3"
                        cols="30"
                        name="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    ></textarea>
                </div>
                <button className="gpt" onClick={handleGpt}>
                    추천받기
                </button>
            </div>
        </div>
    );
}
export default Gpt;
