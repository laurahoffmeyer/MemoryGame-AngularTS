import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/app/shared/models/GameData.model';
import { GameState } from 'src/app/shared/services/GameState.service';
import { HandleTurn } from 'src/app/shared/services/HandleTurn.service';
import { Timer } from 'src/app/shared/services/Timer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private gameState: GameState, private handleTurn: HandleTurn, private timer: Timer) { }

  public showMobileMenu: boolean = false;

  ngOnInit(): void {
    this.showMobileMenu = false;
  }

  get gameData(): GameData {
    return this.gameState.GetGameData();
  }

  public ShowMobilePopUpMenu():void {
    this.showMobileMenu = true;
    this.timer.PauseTimer();
  }

  public HideMobilePopUpMenu():void {
    this.showMobileMenu = false;
  }

  public ContinueTimer() {
    this.timer.ContinueTimer();
  }

  public ResetGame(): void {
    this.handleTurn.ClearMatches();
    this.handleTurn.ResetGuesses();
    this.gameState.ResetGame();
  }

  public NewGame():void {
    this.handleTurn.ClearMatches();
    this.handleTurn.ResetGuesses();
    this.gameState.NewGame();
  }
}
