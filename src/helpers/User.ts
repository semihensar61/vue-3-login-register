import DataService from "../services/UserServices"

export async function passwordMatch(email: string, password: string ) : Promise<Boolean> {
    const users = await DataService.users()
    const user = users.data.filter((user: any) => user.email === email)[0]
    if(user && user.password === password) {
        return true
    }
    return false
}
