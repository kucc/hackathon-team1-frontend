function Daycell({ currentMonth, currentYear, i, calendarList, date, pad }) {
    return (
        <div className={`${currentYear}-${currentMonth}-${pad(i)}`}>
            {i}
            <p>{calendarList[date]?.join('</p><p>') || ''}</p>
        </div>
    );
}

export default Daycell;
