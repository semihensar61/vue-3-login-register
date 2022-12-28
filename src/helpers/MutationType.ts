import { MutationTypes } from "@/store/mutation-types"



export function mutationType(form: string) : MutationTypes {

    if(form === "LOGIN") 
        return MutationTypes.LOGIN

    else(form === "REGISTER")
        return MutationTypes.REGISTER
}       