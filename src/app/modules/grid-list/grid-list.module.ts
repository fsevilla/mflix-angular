import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list/grid-list.component';



@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule
  ],
  exports: [GridListComponent]
})
export class GridListModule { }
