import { Injectable } from '@angular/core';
import { GameData } from '../models/GameData.model';
import { Player } from '../models/Player.model';
import { Settings } from '../models/Settings.model';
import { Icons } from './Icons.service';
import { Timer } from './Timer.service';

@Injectable({
  providedIn: 'root',
})

export class GameState {

  constructor(private icons: Icons, private timer: Timer) { }

  public gameData: GameData = {
      settings: {
          playerCount: 0,
          grid: 0
      },
      players: [],
      currentPlayer: {} as Player,
      isMultiplayer: function(){
        return this.settings.playerCount > 1;
      },
      gameOver: false,
      winners: []
  }

  public InitializeGame(settings: Settings): void {
    this.SetGameSettings(settings);
    this.SetPlayers(settings.playerCount);
    this.SetCurrentPlayer(this.gameData.players[0]);
    this.icons.Setup(settings.grid);
  };

  public NextPlayer(): void {
    let index = this.gameData.players.indexOf(this.gameData.currentPlayer) + 1;
    this.gameData.currentPlayer = this.gameData.players[index >= this.gameData.players.length ? 0 : index];
  }

  public SetWinners(): void {
    let mostMatches = Math.max.apply(Math, this.gameData.players.map(function(player) { return player.matches; }))
    this.gameData.winners = this.gameData.players.filter(player => player.matches === mostMatches);
    this.gameData.winners = this.SortPlayersBasedOnOrder(this.gameData.winners);
  }

  public SortPlayersBasedOnMatches(): void {
    this.gameData.players = this.gameData.players.sort((a, b) => {
      return b.matches - a.matches
    });
  }

  public GetGameData(): GameData {
    return this.gameData;
  };

  public PlusOnePlayerMoves(): void {
    ++this.gameData.currentPlayer.moves;
  }

  public PlusOnePlayerMatches(): void {
    ++this.gameData.currentPlayer.matches;
  }

  public ResetGame(): void {
    this.gameData.players.forEach(player => {
      player.matches = 0;
      player.moves = 0;
    });
    this.gameData.players = this.SortPlayersBasedOnOrder(this.gameData.players);
    this.SetCurrentPlayer(this.gameData.players[0]);
    this.timer.ResetTimer();
    this.gameData.winners = [];
    this.gameData.gameOver = false;
  };

  public NewGame(): void {
    this.gameData.settings = {
      playerCount: 0,
      grid: 0
    }
    this.gameData.players = [];
    this.gameData.currentPlayer = {} as Player;
    this.icons.ResetIcons();
    this.gameData.winners = [];
    this.timer.StopTimer();
    this.gameData.gameOver = false;
  }

  private SetGameSettings(settings: Settings): void {
    this.gameData.settings.playerCount = settings.playerCount;
    this.gameData.settings.grid = settings.grid;
  };

  private SetPlayers(playerCount: number): void {
    for (let i = 0; i < playerCount; i++) {
      const newPlayer: Player = {
        order: i+1,
        matches: 0,
        moves: 0
      };
      this.gameData.players.push(newPlayer);
    }
  };

  private SetCurrentPlayer(player: Player): void {
    this.gameData.currentPlayer = player;
  }

  private SortPlayersBasedOnOrder(players: Player[]): Player[] {
    return players.sort(player => player.order);
  }
}