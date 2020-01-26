import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskDate'
})
export class TaskDatePipe implements PipeTransform {

  transform(timeLimit: any, args?: any): any {
    // console.log(timeLimit);
    // clearTimeout(log);
    
    let now = new Date().getTime();
    // const log: any = (() => {
    //   now = new Date().getTime();
    //   setTimeout(log, 3000);
    // });
    // setTimeout(log, 3000);
    const limit = Date.parse(timeLimit);
    // console.log(limit);
    const diff = new Date(limit - now);

    var day_str = diff.getDate();
    var hour_str = diff.getHours();
    var minute_str = diff.getMinutes();
    var second_str = diff.getSeconds();
    console.log(`残り${day_str}日${hour_str}時間${minute_str}分${second_str}秒`);
    return `残り${day_str}日${hour_str}時間${minute_str}分${second_str}秒`;
  }

}
