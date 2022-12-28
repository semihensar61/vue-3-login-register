// store.ts
import type { InjectionKey } from "vue";
// @ts-ignore
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  tabButtonString: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    tabButtonString: "sadsdasd",
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
