import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LoginReq } from "../models/core-req-models";
import { LoginRes, User } from "../models/core-res-models";
import { AuthDatalayer } from "./auth.datalayer";

@Injectable({
  providedIn: "root",
})
export class CoreDatalayer {
  private BASE_URL = "http://localhost:8080/";
  httpClient: HttpClient = inject(HttpClient);

  public authDataLayer: AuthDatalayer = new AuthDatalayer();
}
