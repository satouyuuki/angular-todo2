import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasks';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  private tasks: Tasks[];
  private selectedTask: Tasks;
  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.getTasks();
  }
  // 初期画面描画タスク
  getTasks(): void {
    console.log('getTasks');
    this.taskService.getTask().subscribe(task => this.tasks = task);
  }

  // タスクが洗濯された時
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
    // console.log(this.tasks);
    this.taskService.deleteTask(task).subscribe();
  }

}
