import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any[]): any[] {
    // 检查输入是否是数组
    if (!Array.isArray(value)) {
      return value; // 如果不是数组，直接返回
    }
    return value.reverse(); // 反转数组
  }
}
