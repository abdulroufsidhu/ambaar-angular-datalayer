import { HttpClient } from "@angular/common/http";
import { LoginRes, User, LoginReq } from "../models/core-models";
import { Observable } from "rxjs";
import { inject } from "@angular/core";
enum SessionStorageKeys {
  TOKEN,
  USER,
}

export const setToken = (value: string) =>
  sessionStorage.setItem(SessionStorageKeys[SessionStorageKeys.TOKEN], value);
export const getToken = () =>
  sessionStorage.getItem(SessionStorageKeys[SessionStorageKeys.TOKEN]);

export const setUser = (value: User) =>
  sessionStorage.setItem(
    SessionStorageKeys[SessionStorageKeys.USER],
    JSON.stringify(value),
  );
export const getUser = () => {
  const u = sessionStorage.getItem(SessionStorageKeys[SessionStorageKeys.USER]);
  if (!!!u) {
    return undefined;
  }
  return JSON.parse(u) as User;
};

export class AuthDatalayer {
  private BASE_URL = "http://localhost:8080/";
  private httpClient: HttpClient = inject(HttpClient);

  constructor(base_url?: string) {
    if (!!base_url) this.BASE_URL = base_url;
  }

  login(request: LoginReq): Observable<LoginRes> {
    return this.httpClient.post<LoginRes>(
      `${this.BASE_URL}/api/users/login`,
      request,
      {},
    );
  }

  signup(request: User) {
    return this.httpClient.post<LoginRes>(
      `${this.BASE_URL}/api/users/sign-up`,
      request,
      {},
    );
  }

  changePassword(oldPassword: string, newPassword: string) {
    const u = getUser();
    return this.httpClient.patch(
      `${this.BASE_URL}/api/users/update-password/${u?.id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );
  }
}
