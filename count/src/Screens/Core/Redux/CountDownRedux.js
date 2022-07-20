import create from "zustand";

const useStore = create((set) => ({
    example: {},
    setExample: (newExample) => set(() => ({ example: newExample }))
}));

export default useStore;