import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TaskDoneComponent } from './task-done/task-done.component';

const routes: Routes = [
  { path: '', redirectTo: '/task', pathMatch: 'full'},
  { path: 'task', component: TaskComponent},
  { path: 'task-done', component: TaskDoneComponent},
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    // CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
