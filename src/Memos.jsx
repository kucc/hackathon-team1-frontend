import useMemosStore from './StoreMemos';

const Memos = () => {
    const { memos } = useMemosStore();

    return (
        <ul>
            {memos.map((memo) => {
                return <li key="memo">{memo}</li>;
            })}
        </ul>
    );
};

export default Memos;
