import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/app/shared/models/GameData.model';
import { GameState } from 'src/app/shared/services/GameState.service';
import { HandleTurn } from 'src/app/shared/services/HandleTurn.service';
import { Timer } from 'src/app/shared/services/Timer.service';

@Component({
  selector: 'app-endgamereview',
  templateUrl: './endgamereview.component.html',
  styleUrls: ['./endgamereview.component.less']
})
export class EndgamereviewComponent implements OnInit {

  constructor(private gameState: GameState, private handleTurn: HandleTurn, private timer: Timer) { }

  public get gameData(): GameData {
    return this.gameState.GetGameData();
  }

  public get formattedTime(): string {
    return this.timer.GetFormattedTime();
  }

  ngOnInit(): void {}

  public PlayerIsWinner(playerOrder: number): boolean {
    let foundPlayer = this.gameData.winners.find(player => player.order === playerOrder);
    return foundPlayer !== undefined ? true : false;
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