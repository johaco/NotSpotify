import { Component, inject } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  newReleases: any[] = [];

  constructor(private spotify: SpotifyService){

    this.spotify.getNewReleases().subscribe( (data: any) =>{
        console.log(data.albums.items);
        this.newReleases = data.albums.items;
      });
  }
}
