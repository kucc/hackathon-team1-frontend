import './Calendar.css';

const Calendar = () => {
    const data = [
        { date: '2022-10-15', content: '테스트1' },
        { date: '2022-10-03', content: '테스트2' },
        { date: '2022-10-15', content: '테스트3' },
        { date: '2022-10-26', content: '테스트4' },
        { date: '2022-10-21', content: '테스트5' },
        { date: '2022-10-23', content: '테스트6' },
    ];

    // 데이터 가공
    const calendarList = data.reduce(
        (acc, v) => ({ ...acc, [v.date]: [...(acc[v.date] || []), v.content] }),
        {}
    );

    // pad method
    Number.prototype.pad = function () {
        return this > 9 ? this : '0' + this;
    };

    // 달력 생성
    const makeCalendar = (date) => {
        // 현재의 년도와 월 받아오기
        const currentYear = new Date(date).getFullYear();
        const currentMonth = new Date(date).getMonth() + 1;

        // 한달전의 마지막 요일
        const firstDay = new Date(date.setDate(1)).getDay();
        // 현재 월의 마지막 날 구하기
        const lastDay = new Date(currentYear, currentMonth, 0).getDate();

        // 남은 박스만큼 다음달 날짜 표시
        const limitDay = firstDay + lastDay;
        const nextDay = Math.ceil(limitDay / 7) * 7;

        let htmlDummy = '';

        // 한달전 날짜 표시하기
        for (let i = 0; i < firstDay; i++) {
            htmlDummy += `<div class="noColor"></div>`;
        }

        // 이번달 날짜 표시하기
        for (let i = 1; i <= lastDay; i++) {
            const date = `${currentYear}-${currentMonth.pad()}-${i.pad()}`;

            htmlDummy += `
        <div>
          ${i}
          <p>
            ${calendarList[date]?.join('</p><p>') || ''}
          </p>
        </div>
      `;
        }

        // 다음달 날짜 표시하기
        for (let i = limitDay; i < nextDay; i++) {
            htmlDummy += `<div class="noColor"></div>`;
        }

        document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
        document.querySelector(
            `.dateTitle`
        ).innerText = `${currentYear}년 ${currentMonth}월`;
    };

    const date = new Date('2022-10-10');

    makeCalendar(date);

    // 이전달 이동
    document.querySelector(`.prevDay`).onclick = () => {
        makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
    };

    // 다음달 이동
    document.querySelector(`.nextDay`).onclick = () => {
        makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
    };

    return (
        <div class="rap">
            <div class="header">
                <div class="btn prevDay"></div>
                <h2 class="dateTitle"></h2>
                <div class="btn nextDay"></div>
            </div>

            <div class="grid dateHead">
                <div>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div>토</div>
            </div>

            <div class="grid dateBoard"></div>
        </div>
    );
};

export default Calendar;
