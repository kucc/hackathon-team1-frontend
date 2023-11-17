import useMemosStore from './StoreMemos';

const Form = () => {
    const { memo, setMemo, setMemos } = useMemosStore();

    const handleWriteMemo = (e) => {
        setMemo(e.target.value);
    };

    const handleAddMemo = (e) => {
        e.preventDefault();
        setMemos(memo);
        setMemo('');
    };

    return (
        <>
            <form onSubmit={handleAddMemo}>
                <input type="text" onChange={handleWriteMemo} value={memo} />
                <button type="submit">작성완료</button>
            </form>
        </>
    );
};

export default Form;
