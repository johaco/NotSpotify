import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient){
    console.log('spotify service');

  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAQwpj1t1FyDNuRtARzhfW720bfyMCE8WbqI-cMaAwGLychOJN_lUoHcwwt-EDnRB9h7QW36H2O5wYqgWAaqpSHScQ0zj-iujBggCpd-hCcVeGl36Y'
    }); // Token se renueva cada una hora
    return this.http.get(url, {headers: headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => data['albums'].items)); // retornando la data de los nuevos lanzamientos
  }

  getArtist(termino : string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe( map( (data : any) => data['artists'].items)); // retornando la data de los artistas
  }
}
