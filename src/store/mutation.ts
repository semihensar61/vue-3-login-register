import { MutationTypes } from './mutation-types'
// @ts-ignore
import type { MutationTree } from 'vuex'
import type { State } from './state'
import type FormInput from '@/types/user'

export type Mutations<S = State> = {
  [MutationTypes.CHANGE_TAB](state: S, payload: string): void,
  [MutationTypes.LOGIN](state: S, payload: string): void,
  [MutationTypes.REGISTER](state: S, payload: string): void,
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.CHANGE_TAB](state: any, payload: string) {
    state.tab = payload
  },
  [MutationTypes.LOGIN](state: any, payload: FormInput) {
    state.login[payload.key] = payload.value
  },
  [MutationTypes.REGISTER](state: any, payload: FormInput) {
    state.register[payload.key] = payload.value
  },
}
