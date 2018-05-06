import { NgModule } from '@angular/core';

import { MatToolbarModule, MatLineModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatLineModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatLineModule
  ]
})
export class MaterialModule { }