import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent, AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: Observable<string>;
  isLoggedIn: Boolean = false;
  favoriteGame: String = '';

  constructor(private readonly appStates: AppState) {
    this.appStates.username.username.set('CITYLarry');
    this.username = appStates.username.username.$();
  }


  getFavoriteEvent(game: String): void {
    this.favoriteGame = game;
  }
}
