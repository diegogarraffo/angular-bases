import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { HeroComponent } from "./heroes/hero/hero.component";
import { ListComponent } from "./heroes/list/list.component";
import { HeroesModule } from "./heroes/heroes.module";


@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    HeroesModule
  ],
  providers : [],
  bootstrap: []
})

export class AppModule {}
