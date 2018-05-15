import { NgModule } from '@angular/core';

import { MatToolbarModule, MatLineModule, MatListModule, MatGridListModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }