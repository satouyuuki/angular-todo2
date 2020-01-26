import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { TaskDialogModule } from './shared/task-dialog/task-dialog.module';
import { TaskDoneComponent } from './task-done/task-done.component';
import { AppRoutingModule } from './app-routing.module';
// 超絶参考になった記事
// https://angular.keicode.com/topics/angular-material-install.php
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { TaskDatePipe } from './pipe/task-date.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDetailComponent,
    TaskDoneComponent,
    TaskDatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    BrowserAnimationsModule,
    MaterialModule,
    TaskDialogModule,
    AppRoutingModule,
    Ng2FlatpickrModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
