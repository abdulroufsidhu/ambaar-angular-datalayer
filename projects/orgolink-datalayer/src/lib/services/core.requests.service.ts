import { HttpClient, provideHttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LoginRes, User } from "../models/core-res-models";
import { Observable } from "rxjs";
import { LoginReq } from "../models/core-req-models";

////////////////// Auth DataLayer Start //////////////////

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

class AuthDatalayer {
  BASE_URL = "http://localhost:8080/";
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient, base_url?: string) {
    this.httpClient = httpClient;
    if (!!base_url) this.BASE_URL = base_url;
  }

  login(request: LoginReq): Observable<LoginRes> {
    const loginResponse = this.httpClient.post<LoginRes>(
      `${this.BASE_URL}/api/users/login`,
      request,
      {},
    );
    loginResponse.subscribe((value) => {
      setToken(value.token);
      setUser(value.user);
    });
    return loginResponse;
  }

  signup(request: User) {
    return this.httpClient.post(
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

////////////////// Auth DataLayer End ////////////////////

@Injectable({
  providedIn: "root",
})
export class CoreDatalayer {
  private BASE_URL = "http://localhost:8080/";
  private httpClient: HttpClient;
  public authDataLayer: AuthDatalayer;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.authDataLayer = new AuthDatalayer(httpClient);
  }
}
