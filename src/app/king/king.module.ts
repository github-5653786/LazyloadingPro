import { KingRoutingModule } from './king-routing.module';
import { KingComponent } from './king.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    KingComponent
  ],
  imports: [
    CommonModule,
    KingRoutingModule

  ]
})
export class KingModule {
  constructor() {
    console.log("King Module ")
  }
}
