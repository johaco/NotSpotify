import { Component, inject } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';
import { NoimagesPipe } from '../../pipes/noimages.pipe';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { LoadingComponent } from '../shared/loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NoimagesPipe, TarjetasComponent, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  loading: boolean;
  newReleases: any[] = [];

  constructor(private spotify: SpotifyService){

    this.loading = true;

    this.spotify.getNewReleases().subscribe( (data: any) =>{
        console.log(data);
        this.newReleases = data;
        this.loading = false;
      });
  }
}
