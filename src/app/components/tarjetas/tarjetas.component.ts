import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NoimagesPipe } from '../../pipes/noimages.pipe';
import { LoadingComponent } from "../shared/loading/loading.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [CommonModule, NoimagesPipe, LoadingComponent],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private router : Router){}

  seeArtist(item : any){
    let artistId;

    if(item.type === 'artist'){
      artistId = item.id
    }
    else {
      artistId = item.artists[0].id
    }

    this.router.navigate(['/artist', artistId]);

  }
}
