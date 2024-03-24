import { create } from "zustand";

interface CounterStore {
    counter: number;
    increment: () => void;
    reset: () => void;
}

        // an arrow function for updating the state of the store
        //arrow func returns an object which is the state of the store
const useCounterStore = create<CounterStore>( set => ({
    counter: 0,
    increment: () => set(store => ({ counter: store.counter + 1 })),
    reset: () => set(() => ({ counter: 0 }))
}));

export default useCounterStore;