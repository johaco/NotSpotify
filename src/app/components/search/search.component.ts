import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';
import { NoimagesPipe } from '../../pipes/noimages.pipe';
import { TarjetasComponent } from "../tarjetas/tarjetas.component";
import { LoadingComponent } from '../shared/loading/loading.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, NoimagesPipe, TarjetasComponent, LoadingComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  artists : any[] = [];
  loading : boolean;

    constructor(private spotify : SpotifyService){
      this.loading = false;
    }

    search(termino : string){
      console.log(termino);
      this.loading = true;
      this.spotify.getArtists(termino).subscribe(
        (data : any) => {
          console.log(data);
          this.artists = data;
          this.loading = false;
       });

    }
}
