import http from "@/http-common";

/* eslint-disable */
class DataService {

  login(email: string): Promise<any> {
    return http.get(`/users/:${email}`);
  }

  register(data: any): Promise<any> {
    return http.post("/users", data);
  }

  users() : Promise<any> {
    return http.get("/users");
  }
}

export default new DataService();
