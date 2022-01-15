import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/app/shared/models/GameData.model';
import { GameState } from 'src/app/shared/services/GameState.service';
import { HandleTurn } from 'src/app/shared/services/HandleTurn.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private gameState: GameState, private handleTurn: HandleTurn) { }

  ngOnInit(): void {}

  get gameData(): GameData {
    return this.gameState.GetGameData();
  }

  public ResetGame() {
    this.handleTurn.ClearMatches();
    this.handleTurn.ResetGuesses();
    this.gameState.ResetGame();
  }

  public NewGame() {
    this.handleTurn.ClearMatches();
    this.handleTurn.ResetGuesses();
    this.gameState.NewGame();
  }
}
