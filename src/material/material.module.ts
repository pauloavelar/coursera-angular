import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatLineModule,
  MatListModule,
  MatGridListModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatSliderModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSliderModule,
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSliderModule,
  ]
})
export class MaterialModule { }