import { Injectable } from '@angular/core';
import { Tasks } from './tasks';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(): Object {
    const tasks: Tasks[] = [
      { id: 1, taskName: '宿題終わらす', taskTag: ['test1', 'test2'], taskContent: '' },
      { id: 2, taskName: 'テスト頑張る', taskTag: ['test2', 'test3'], taskContent: '' },
      { id: 3, taskName: 'とにかく頑張る', taskTag: [], taskContent: '' },
      { id: 4, taskName: 'test1', taskTag: [], taskContent: '' },
      { id: 5, taskName: 'test2', taskTag: [], taskContent: '' },
      { id: 6, taskName: 'test3', taskTag: [], taskContent: '' },
      { id: 7, taskName: 'test4', taskTag: [], taskContent: '' },
    ];
    return { tasks };
  }
}
