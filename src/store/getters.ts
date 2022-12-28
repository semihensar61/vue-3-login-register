// @ts-nocheck
import type { GetterTree } from 'vuex'
import type { State } from './state'

export type Getters = {
  tab(state: State): string
}


export const getters: GetterTree<State, State> & Getters = {
  tab: (state: State) => {
    return state.tab
  },
}