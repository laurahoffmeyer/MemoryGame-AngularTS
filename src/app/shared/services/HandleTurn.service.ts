import { Injectable } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { GameData } from '../models/GameData.model';
import { Icon } from '../models/Icon.model';
import { GameState } from './GameState.service';
import { Icons } from './Icons.service';
import { Timer } from './Timer.service';

@Injectable({
  providedIn: 'root',
})

export class HandleTurn {

  constructor(private gameState: GameState, private icons: Icons, private timer: Timer) { }

  public guessOne?:Icon;
  public guessTwo?:Icon;

  private get iconLibrary(): Icon[] {
    return this.icons.GetIcons();
  }
  private get gameData(): GameData {
    return this.gameState.GetGameData();
  }
  private matchedGuesses:IconProp[] = [];
  
  public TakeTurn(index: number): void {
    if(this.ContinueTurn(index)) {

      this.gameState.PlusOnePlayerMoves();

      if (this.guessOne === undefined) {
        this.guessOne = this.iconLibrary[index];
      } else {
        this.guessTwo = this.iconLibrary[index];
  
        if (this.IsMatch()) {
          this.matchedGuesses.push(this.guessOne.iconProp);
          this.gameState.PlusOnePlayerMatches();
        } else if (this.gameData.isMultiplayer()) {
          setTimeout(() => {
            this.gameState.NextPlayer(), 
            this.ResetGuesses()}, 800);
          return;
        }
        setTimeout(() => {this.ResetGuesses()}, 800);
      }

      if (this.GameOver()) {
        this.gameState.SetWinners();
        this.gameState.SortPlayersBasedOnMatches();
        this.timer.StopTimer();
        this.gameData.gameOver = true;
      }
    }
  }

  public IsInMatchedArray(index: number): boolean {
    return this.matchedGuesses.includes(this.iconLibrary[index].iconProp)
  }

  public GameOver(): boolean {
    return this.matchedGuesses.length >= (this.iconLibrary.length / 2)
  }

  public ResetGuesses(): void {
    this.guessOne = undefined;
    this.guessTwo = undefined;
  }

  public ClearMatches(): void {
    this.matchedGuesses = [];
  }

  private IsActiveTurn(): boolean {
    if (this.guessOne != undefined
      && this.guessTwo != undefined) {
        return true;
    } else {
      return false;
    }
  }

  private ContinueTurn(index: number): boolean {
    return this.iconLibrary[index] != null
      && !this.IsInMatchedArray(index)
      && (!this.IsActiveTurn());
  }

  private IsMatch(): boolean {
    return this.guessOne?.iconProp 
        === this.guessTwo?.iconProp &&
        this.guessOne?.instance != this.guessTwo?.instance
  }
}