import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasks';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.sass']
})
export class TaskDoneComponent implements OnInit {
  private tasks: Tasks[];
  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.initTask();
  }

  // 初期画面描画タスク
  initTask(): void {
    this.taskService.getTask().subscribe(task => {
      this.tasks = task.filter(t => t.doneFlag !== false);
      console.log(task);
    });
  }


}
