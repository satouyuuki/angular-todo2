import { NgModule } from '@angular/core';
import { MaterialModule } from './materials/material.module';
import { TaskDatePipe } from './pipe/task-date.pipe';
import { TaskDialogModule } from './task-dialog/task-dialog.module';
@NgModule({
  declarations: [
    TaskDatePipe,
  ],
  imports: [
    MaterialModule,
    TaskDialogModule,
  ],
  exports: [
    TaskDatePipe,
    MaterialModule
  ]
})
export class SharedModule { }
