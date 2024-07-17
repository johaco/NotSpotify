import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient){
    console.log('spotify service');

  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAVr7FaN5TSa3D6UBXgBq22xnbpnA4BfNyi406L2lHVDiUUfGeT04eztlH2Ouc5YhSIzk8ezGlWJbTCTfo2bWqVgJPb6emyd_yKecWZ1E1g_ofs8JM'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers: headers});

  }

  getArtist(termino : string){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAVr7FaN5TSa3D6UBXgBq22xnbpnA4BfNyi406L2lHVDiUUfGeT04eztlH2Ouc5YhSIzk8ezGlWJbTCTfo2bWqVgJPb6emyd_yKecWZ1E1g_ofs8JM'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, {headers: headers});

  }
}
