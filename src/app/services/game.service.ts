import { Injectable } from '@angular/core';
import { URL_RESOURCES } from '../core/reources/url.resources';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url: string = URL_RESOURCES.game;

  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.url);
  }

  getGameById(id: string): Observable<Game> {
    return this.httpClient.get<Game>(`${this.url}/${id}`)
  }
}
