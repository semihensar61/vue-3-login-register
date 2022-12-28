import { MutationTypes } from "@/store/mutation-types"
import { ActionTypes } from "@/store/action-types"



export function mutationType(form: string) : MutationTypes {

    if(form === "LOGIN") 
        return MutationTypes.LOGIN

    else(form === "REGISTER")
        return MutationTypes.REGISTER
}

export function actionType(form: string) : ActionTypes {

    if(form === "LOGIN") 
        return ActionTypes.LOGIN

    else(form === "REGISTER")
        return ActionTypes.REGISTER
}       