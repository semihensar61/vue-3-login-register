// @ts-nocheck
import type { ActionTree, ActionContext } from 'vuex'
import type { State } from './state'
import type { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'
import type { LoginForm, RegisterForm } from '@/types/user'
import DataService from "../services/UserServices"

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.REGISTER](
    { commit }: AugmentedActionContext,
    payload: RegisterForm
  ): Promise<number>,
  [ActionTypes.LOGIN](
    { commit }: AugmentedActionContext,
    payload: LoginForm
  ): Promise<number>
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.REGISTER]({ commit, getters }) {
    return DataService.register({
        fullName: getters.register.fullName,
        email: getters.register.email,
        password: getters.register.password
    })
  },
  [ActionTypes.LOGIN]({ commit }) {
    // login request here
  },
}
