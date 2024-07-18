import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent {

  constructor(private router: ActivatedRoute){

    this.router.params.subscribe( params =>{
      console.log(params['id']);

    })

  }
}
