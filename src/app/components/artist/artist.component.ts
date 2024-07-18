import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { NoimagesPipe } from '../../pipes/noimages.pipe';
import { LoadingComponent } from "../shared/loading/loading.component";
import { CommonModule } from '@angular/common';
import { DomseguroPipe } from '../../pipes/domseguro.pipe';


@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [NoimagesPipe, RouterLink, LoadingComponent, CommonModule, NoimagesPipe, DomseguroPipe],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {

  loading: boolean;
  artist: any = {};
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify : SpotifyService){

    this.loading = true;

    this.router.params.subscribe( params =>{
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string){
    this.spotify.getArtist(id)
      .subscribe(artist => {
        console.log(artist);
        this.artist = artist;
        this.loading = false;
      });
  }

  getTopTracks(id: string){
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }

}
