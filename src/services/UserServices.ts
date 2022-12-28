import http from "@/http-common";

/* eslint-disable */
class DataService {

  login(id: any): Promise<any> {
    return http.get(`/${id}`);
  }

  register(data: any): Promise<any> {
    return http.post("/users", data);
  }
}

export default new DataService();
