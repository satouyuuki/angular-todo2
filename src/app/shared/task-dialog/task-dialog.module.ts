import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDialogComponent } from './task-dialog.component';
import { MaterialModule } from '../materials/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TaskDialogComponent],
  entryComponents: [TaskDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class TaskDialogModule { }
