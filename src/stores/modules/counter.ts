import { defineStore, acceptHMRUpdate } from "pinia";

interface CounterState {
  count: number;
}

export const useCounterStore = defineStore("counter", {
  state: (): CounterState => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}

