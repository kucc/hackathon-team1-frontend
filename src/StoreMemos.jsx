import create from 'zustand';

const useMemosStore = create((set) => ({
    date: new Date('2022-11-15'),
    updateDate: (newDate) => set({ date: newDate }),
    handleDateChange: (classValue) => {
        set(({ updateDate }) => {
            const newDate = new Date(classValue);
            updateDate(newDate);
        });
    },
    pad: (num) => num.toString().padStart(2, '0'),
    memo: '',
    setMemo: (text) => set({ memo: text }),
    memos: [],
    setMemos: (newMemo) =>
        set((prev) => ({
            memos: [...prev.memos, newMemo],
        })),
}));

export default useMemosStore;
