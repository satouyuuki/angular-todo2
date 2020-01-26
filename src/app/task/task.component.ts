import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tasks } from '../tasks';
import { TaskService } from '../task.service';
// MatDialogサービス
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../shared/task-dialog/task-dialog.component';
import { FlatpickrOptions } from 'ng2-flatpickr';
import  Japanese  from 'flatpickr/dist/l10n/ja.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  private tasks: Tasks[];
  public selectedTask: Tasks;
  public dialogTask: Tasks;
  public now: Observable<Date>;
  // private intervalList = [];
  private options: FlatpickrOptions = {
    locale: Japanese,
    enableTime: true,
    time_24hr: true,
    minDate: new Date(),
  };
  
  constructor(
    private taskService: TaskService,
    // 1.MatDialogサービスのDI
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.initTask();
    // this.now = new Observable((observer) => {
    //   this.intervalList.push(setInterval(() => {
    //     observer.next(new Date());
    //     // console.log(observer);// Subscriber{}
    //   }, 1000));
    // })
  }

  ngOnDestroy() {
    // if(this.intervalList) {
    //   this.intervalList.forEach((interval) => {
    //     clearInterval(interval);
    //   })
    // }
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
    this.taskService.getTask().subscribe(task => {
      this.tasks = task.filter(t => t.doneFlag !== true);
      console.log(task);
    });
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

  // 完了ボタンが押されたとき
  done(task: Tasks) {
    console.log(task);
    this.taskService.doneTask(task).subscribe();
    this.initTask();
  }

  // 追加ボタン押されたとき
  add(value: string, timeLimit?: any) {
    const taskName = value.trim();
    console.log(timeLimit);
    if(!taskName) {
      return;
    } else {
      this.taskService.addTask({taskName, doneFlag: false, timeLimit} as Tasks).subscribe(task => {
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
