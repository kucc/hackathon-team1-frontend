import create from 'zustand';

const useMemosStore = create((set) => ({
    date: new Date('2023-11-18'),
    updateDate: (newDate) => set({ date: newDate }),
    formDate: '',
    updateFormDate: (newDate) => set({ formDate: newDate }),
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
