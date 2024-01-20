import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatButtonModule,
    MatSliderModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
