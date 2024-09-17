import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthDatalayer } from "./datalayers/auth";

@Injectable({
  providedIn: "root",
})
export class DatalayerService {
  constructor() {}

  private httpClient: HttpClient = inject(HttpClient);
  public authDataLayer: AuthDatalayer = new AuthDatalayer();
}
