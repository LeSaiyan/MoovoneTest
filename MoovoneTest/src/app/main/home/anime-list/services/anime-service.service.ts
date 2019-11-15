import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import Anime from '../models/anime';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://api.jikan.moe/v3";
  anime = "Fate/Zero";

  getAnimesList(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/anime/?q=${this.anime}&page=1`)
  }

}
