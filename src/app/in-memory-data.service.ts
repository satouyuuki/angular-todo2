import { Injectable } from '@angular/core';
import { Tasks } from './tasks';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(): Object {
    const tasks = [
      { id: 1, taskName: '宿題終わらす' },
      { id: 2, taskName: 'テスト頑張る' },
      { id: 3, taskName: 'とにかく頑張る' },
    ];
    return { tasks };
  }
  // getId(tasks: Tasks[]): number {
  //   if(tasks.length > 0) {
  //     return tasks.length + 1;
  //   } else {
  //     return 1;
  //   }
  // }
}
