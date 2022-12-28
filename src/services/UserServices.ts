import http from "@/http-common";

/* eslint-disable */
class TutorialDataService {

  login(id: any): Promise<any> {
    return http.get(`/${id}`);
  }

  register(data: any): Promise<any> {
    return http.post("/", data);
  }
}

export default new TutorialDataService();
