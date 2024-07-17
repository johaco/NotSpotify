import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  artists : any[] = [];

    constructor(private spotify : SpotifyService){

    }

    search(termino : string){
       console.log(termino);
       this.spotify.getArtist(termino).subscribe(
        (data : any) => {
          console.log(data.artists.items);
          this.artists = data.artists.items;
       });

    }
}
