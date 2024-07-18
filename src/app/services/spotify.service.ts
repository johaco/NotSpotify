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
      'Authorization' : 'Bearer BQDfVlTPCdpGXsonwYwmc2wFUKOyiub4uff1DfCNsW7ASf12C-zRAyzn1XrMJLSXdKTCDkKwiI_MgIhgE-YNsmlBmSbq50ic5n4waxpjM_AKHsa40Vo'
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
