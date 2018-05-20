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
  ]
})
export class MaterialModule { }