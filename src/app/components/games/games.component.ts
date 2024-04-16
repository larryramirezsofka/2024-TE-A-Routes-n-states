import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../models/game.model';
import { AppState } from '../../state/app.state';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  //@Input() username: String = '';
  @Output() addFavoriteEvent = new EventEmitter<String>();

  username: string = '';

  constructor(private readonly appStates: AppState){
    this.username = appStates.username.username.snapshot();
  }

  games: Game[] = [
    {
      id: 1,
      name: 'Stellar Blade'
    },
    {
      id: 2,
      name: 'Lies Of P'
    },
    {
      id: 3,
      name: 'Spider-man PS5'
    }
  ]

  favorite(gameName: String): void {
    this.addFavoriteEvent.emit(gameName);
  }
}
