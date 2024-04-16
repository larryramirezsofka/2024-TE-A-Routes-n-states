import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../models/game.model';
import { AppState } from '../../state/app.state';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';

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
  games: Game[] = []

  constructor(
    private readonly appStates: AppState,
    private readonly gameService: GameService,
    private readonly router: Router
  ) {
    this.username = appStates.username.username.snapshot();
    gameService.getAll().subscribe({
      next: (data) => this.games = data,
      error: (err) => console.error("Error en cargar los uegos:" + err),
      complete: () => {}
    }
    );
  }


  favorite(gameId: Number): void {
    //this.addFavoriteEvent.emit(gameName);
    this.router.navigateByUrl(`/games/${gameId}`)
  }
}
