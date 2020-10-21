import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value - minutes * 60);

    const x = minutes < 10 ? '0' + minutes : minutes;
    const y = seconds < 10 ? '0' + seconds : seconds;
    return `${x}:${y}`;
  }

}
