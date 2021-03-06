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
  MatProgressSpinnerModule,
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
    MatProgressSpinnerModule,
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
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule { }