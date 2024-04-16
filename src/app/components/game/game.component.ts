import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  gamename: String = '';
  gameid: string = '';
  gameDescription: String = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gameService: GameService
  ){
    this.gameid = route.snapshot.params['id'];
    gameService.getGameById(this.gameid).subscribe({
      next: (data) => {
        this.gamename = data.name;
        this.gameDescription = data.description;
      }
    });
  }
}
