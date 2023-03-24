import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myDate',
standalone: true})

export class MyDatePipe implements PipeTransform {
  transform(value: Date): string {
    const now = new Date();
    const diff = now.getTime() - value.getTime(); // difference in milliseconds
    const diffInMinutes = Math.floor(diff / (1000 * 60)); // difference in minutes
    const diffInHours = Math.floor(diffInMinutes / 60); // difference in hours
    const diffInDays = Math.floor(diffInHours / 24); // difference in days

    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
    } else {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`;
    }
  }
}
