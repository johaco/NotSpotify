import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimages',
  standalone: true
})
export class NoimagesPipe implements PipeTransform {

  transform(images: any[]): string {
    if(!images){
      return 'assets/img/noimagen.jpg';
    }

    if(images.length > 0){
      return images[0].url;
    }
    else{
      return 'assets/img/noimagen.jpg';
    }
  }

}
