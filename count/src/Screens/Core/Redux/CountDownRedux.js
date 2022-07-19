import create from "zustand";

const useStore = create((set) => ({
    example: [],
    setExample: () => set((state) => ({example:state.example}))
}));

export default useStore;