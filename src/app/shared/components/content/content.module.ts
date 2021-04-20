import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContentComponent } from "./content.component";

@NgModule({
    declarations: [ContentComponent],
    exports: [ContentComponent],
    imports: [CommonModule],
  })
  export class ContentModule {}
  