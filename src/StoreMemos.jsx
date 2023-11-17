import create from 'zustand';

const useMemosStore = create((set) => ({
    date: new Date('2022-11-15'),
    updateDate: (newDate) => set({ date: newDate }),
    memo: '',
    setMemo: (text) => set({ memo: text }),
    memos: [],
    setMemos: (newMemo) =>
        set((prev) => ({
            memos: [...prev.memos, newMemo],
        })),
}));

export default useMemosStore;
