import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameState } from 'src/app/shared/services/GameState.service';
import { GameData } from 'src/app/shared/models/GameData.model';
import { Settings } from 'src/app/shared/models/Settings.model';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.less']
})
export class GameboardComponent implements OnInit {
  constructor(private router: Router, private gameState: GameState) { }

  public get gameData(): GameData {
    return this.gameState.GetGameData();
  }

  ngOnInit(): void {
    const settings: Settings = {
      playerCount: history.state.playerCount,
      grid: history.state.grid
    }

    if (settings.grid != undefined && settings.playerCount != null) {
      this.gameState.InitializeGame(settings);
    } else {
      this.router.navigate(['']);
    }
  }
}