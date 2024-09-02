import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "lib-datalayer",
  standalone: true,
  imports: [HttpClientModule],
  template: ` <p>datalayer works!</p> `,
  styles: ``,
})
export class DatalayerComponent {}
