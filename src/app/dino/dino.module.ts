import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinoListComponent } from './dino-list/dino-list.component';
import { DinoDetailComponent } from './dino-detail/dino-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[DinoListComponent],
  declarations: [DinoListComponent, DinoDetailComponent]
})
export class DinoModule { }
