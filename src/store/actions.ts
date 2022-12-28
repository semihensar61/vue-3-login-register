// @ts-nocheck
import type { ActionTree, ActionContext } from 'vuex'
import type { State } from './state'
import type { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_COUTNER](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.GET_COUTNER]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 256
        commit(MutationTypes.CHANGE_TAB, data)
        resolve(data)
      }, 500)
    })
  },
}
