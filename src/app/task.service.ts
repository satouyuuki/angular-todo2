import { Injectable } from '@angular/core';
import { Tasks } from './tasks';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
  ) { }

  private taskUrl = 'api/tasks';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // タスクをサーバーから取得(タグ検索)
  searchTask(term: string): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(`${this.taskUrl}?taskTag=${term}`);
  }
  // タスクをサーバーから取得
  getTask(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.taskUrl);
  }
  // タスクの完了フラグを変更する
  doneTask(task: Tasks): Observable<Tasks> {
    // const id = task.id;
    task.doneFlag = true;
    // const url = `${this.taskUrl}/${id}`;
    return this.http.put<Tasks>(this.taskUrl, task, this.httpOptions);
  }
  // サーバーにタスクをpostする
  addTask(task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.taskUrl, task, this.httpOptions);
  }
  // サーバーのタスクをdeleteする
  deleteTask(task: Tasks): Observable<Tasks> {
    const id = task.id;
    const url = `${this.taskUrl}/${id}`;
    return this.http.delete<Tasks>(url, this.httpOptions);
  }
}
