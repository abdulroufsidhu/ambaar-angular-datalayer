import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthDatalayer } from "./datalayers/auth";

@Injectable({
  providedIn: "root",
})
export class CoreDatalayer {
  private BASE_URL = "http://localhost:8080/";
  httpClient: HttpClient = inject(HttpClient);

  public authDataLayer: AuthDatalayer = new AuthDatalayer();
}
