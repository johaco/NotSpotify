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
      'Authorization' : 'Bearer BQBaio7vLNOKuBhC4iUwzPVJ7ET_O3wI4smv_Eux5hrBzDdkC1bRr0hOUyfz931i4tu2ayvCNYFhc8u7uTu4dTU1OMSdINsjd-UXgALYi1Y80mCefRM'
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
}
