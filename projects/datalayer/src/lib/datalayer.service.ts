import { Injectable } from "@angular/core";
import { LoginReq } from "../public-api";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DatalayerService {
  private BASE_URL = "http://localhost:8080/";

  setBaseUrl(url: string) {
    this.BASE_URL = url;
  }

  constructor(private http: HttpClient) {}

  private get(url: string, options?: any) {
    return this.http.get(url, options);
  }
  private post(url: string, data: any, options?: { headers?: HttpHeaders }) {
    return this.http.post(url, data, options);
  }
  private put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options);
  }
  private delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }

  public login(req: LoginReq) {
    const url = `${this.BASE_URL}sign-in`;
    return this.post(url, req);
  }
}
