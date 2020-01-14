import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../tasks';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.sass']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Tasks;
  
  constructor() { }

  ngOnInit() {
  }

}
