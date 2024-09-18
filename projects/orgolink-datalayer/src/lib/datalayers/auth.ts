import { HttpClient } from "@angular/common/http";
import { LoginRes, User, LoginReq, ResponseModel } from "../models/core-models";
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
  private BASE_URL = "http://localhost:8080";
  private httpClient: HttpClient = inject(HttpClient);

  private createFullUrl = (url: string) => `${this.BASE_URL}${url}`;

  constructor(base_url?: string) {
    if (!!base_url) this.BASE_URL = base_url;
  }

  login(request: LoginReq): Observable<ResponseModel<LoginRes>> {
    return this.httpClient.post<ResponseModel<LoginRes>>(
      this.createFullUrl(`/api/users/login`),
      request,
      {},
    );
  }

  updateAuthCache(loginResponse: LoginRes) {
    setToken(loginResponse.token);
    setUser(loginResponse.user);
  }

  signup(request: User) {
    return this.httpClient.post<ResponseModel<LoginRes>>(
      this.createFullUrl(`/api/users/sign-up`),
      request,
      {},
    );
  }

  changePassword(old_password: string, new_password: string) {
    const u = getUser();
    return this.httpClient.patch<ResponseModel<User>>(
      this.createFullUrl(`/api/users/update-password`),
      { old_password, new_password },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );
  }

  updateUser(user: User) {
    return this.httpClient.patch<ResponseModel<User>>(
      this.createFullUrl("/api/users/update-user"),
      user,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );
  }
}
