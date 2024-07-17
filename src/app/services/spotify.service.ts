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
      'Authorization' : 'Bearer BQDnBrFXjpTOY02d883w14W9l2El4wWZqwq4FkExPhakc66chYvydGTUhVkKj5YkXe7zOVqY9nWxJIc8Y5wRMXrJtPN45GNCe05babPO2wRIBYnt000'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers: headers});

  }
}
