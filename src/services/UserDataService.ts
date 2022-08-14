import http from "@/plugins/axios";
import userApi from "@/configs/api"

/* eslint-disable */
class UserDataService {
  list(): Promise<any> {
    return http.get(userApi.LIST);
  }
}

export default new UserDataService();
