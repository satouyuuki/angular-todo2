import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../tasks';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.sass']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Tasks;
  public errorMessage: string;
  constructor() { }

  ngOnInit() {
  }

  // タグを追加する
  addTag(tag) {
    if(this.task.taskTag.length >= 10) {
      this.errorMessage = '１０個までです';
    } else {
      this.task.taskTag.push(tag);
    }
  }

}
