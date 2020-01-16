import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasks';
import { TaskService } from '../task.service';
// MatDialogサービス
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../shared/task-dialog/task-dialog.component';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  private tasks: Tasks[];
  public selectedTask: Tasks;
  public dialogTask: Tasks;
  constructor(
    private taskService: TaskService,
    // 1.MatDialogサービスのDI
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.initTask();
  }

  // タグ検索
  search(term) {
    if(!term) {
      this.initTask();
    } else {
      this.taskService.searchTask(term).subscribe(task => this.tasks = task);
    }
  }
  // 初期画面描画タスク
  initTask(): void {
    this.taskService.getTask().subscribe(task => this.tasks = task);
  }

  // ダイアログが選択されたとき
  openDialog(task: Tasks) {
    this.dialogTask = task;
    // 2.サービスを利用してmat-dialogをopen
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '90vw',
      height: '90vh',
      data: this.dialogTask
    });
    // 3.はダイアログコンポーネントに記載

    // 4. ダイアログを閉じた後処理
    dialogRef.afterClosed().subscribe(
      result => {
        console.log('dialog was closed:', result);
        if (result !== undefined) {
          this.dialogTask = result;
        }
      }
    );
  }

  // タスクが選択された時
  onSelectedTask(task: Tasks) {
    this.selectedTask = task;
  }

  // 追加ボタン押されたとき
  add(value: string) {
    const taskName = value.trim();
    if(!taskName) {
      return;
    } else {
      this.taskService.addTask({taskName} as Tasks).subscribe(task => {
        this.tasks.push(task);
      })
    }
  }
  
  // 削除ボタン押されたとき
  delete(task: Tasks) {
    this.tasks = this.tasks.filter(t => t !== task)
    this.taskService.deleteTask(task).subscribe();
  }

}
