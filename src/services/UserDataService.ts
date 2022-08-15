import http from "@/plugins/axios";
import userApi from "@/configs/api"
import { IUser } from "@/types/index";

/* eslint-disable */
class UserDataService {
  list(page: number = 1, perPage: number = 10): Promise<any> {
    return http.get(`${userApi.LIST}?page=${page}&per_page=${perPage}&delay=1`);
  }
  detail(id: number) {
    return http.get(`${userApi.DETAIL}/${id}?delay=1`);
  }
  update(id: number, data: IUser) {
    return http.put(`${userApi.DETAIL}/${id}?delay=1`, data);
  }
  delete(id: number) {
    return http.delete(`${userApi.DETAIL}/${id}?delay=1`);
  }
  create(data: IUser) {
    return http.post(`${userApi.DETAIL}?delay=1`, data);
  }
}

export default new UserDataService();
