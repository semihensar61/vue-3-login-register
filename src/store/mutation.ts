import { MutationTypes } from './mutation-types'
// @ts-ignore
import type { MutationTree } from 'vuex'
import type { State } from './state'

export type Mutations<S = State> = {
  [MutationTypes.CHANGE_TAB](state: S, payload: string): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.CHANGE_TAB](state: any, payload: string) {
    state.tab = payload
  },
}