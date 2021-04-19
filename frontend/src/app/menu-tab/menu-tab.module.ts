import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTabComponent } from './menu-tab.component';
import { FormsModule } from '@angular/forms';
// import { MenuTabRoutingModule } from './menu-tab-routing.module';



@NgModule({
  declarations: [
    MenuTabComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // MenuTabRoutingModule
  ]
})
export class MenuTabModule { }
