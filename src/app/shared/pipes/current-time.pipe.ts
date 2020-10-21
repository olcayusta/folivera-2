import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentTime'
})
export class CurrentTimePipe implements PipeTransform {

  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value - minutes * 60);

    const x = minutes < 10 ? '0' + minutes : minutes;
    const y = seconds < 10 ? '0' + seconds : seconds;
    return `${x}:${y}`;
  }

}
