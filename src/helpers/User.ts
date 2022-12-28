import type LoginForm  from "@/types/user"
import DataService from "../services/UserServices"



export async function passwordMatch(email: string, password: string ) : Promise<Boolean> {
    console.log(email, password)
    const users = await DataService.users()
    console.log(users.data)
    const user = users.data.filter((user: any) => user.email === email)[0]
    if(user && user.password === password) {
        return true
    }
    return false
}
