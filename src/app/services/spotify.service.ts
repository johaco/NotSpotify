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
      'Authorization' : 'Bearer BQA5e-82yqPU-IRiC3ih9kOuUfVuQkwAk7Eo4GkD4uuy8U7g6RgO4TsbhlKbhOsqT9qw4ZoHahKoEmtPhCulvXaI4j-HMcGntuj4DsOsglF2RaL_gS0'
    }); // Token se renueva cada una hora
    return this.http.get(url, {headers: headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe( map( (data: any) => data['albums'].items)); // retornando la data de los nuevos lanzamientos
  }

  getArtists(termino : string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe( map( (data : any) => data['artists'].items)); // retornando la data de los artistas
  }
  getArtist(id : string){
    return this.getQuery(`artists/${id}`);
    //   .pipe( map( (data : any) => data['artists'].items)); // retornando la data de los artistas
  }

  getTopTracks(id : string){
    return this.getQuery(`artists/${id}/top-tracks`)
      .pipe( map( (data : any) => data['tracks'])); // retornando la data de los artistas
  }
}
