import { Component, OnInit, Inject } from '@angular/core';
import { Tasks } from '../../tasks';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.sass']
})
export class TaskDialogComponent implements OnInit {

  constructor(
    // 3.コンストラクターでDialogを参照するためのクラスMatDialogRef<T>をDI
    // 呼び出し元(taskcomponent)で設定したdataパラメータ(DialogData)を設定
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Tasks ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
