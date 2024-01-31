import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { AppComponent } from "../app.component";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  //providers:[],
  //bootstrap:[AppComponent]

})

export class HeroesModule {}
