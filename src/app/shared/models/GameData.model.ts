import { Player } from "./Player.model";
import { Settings } from "./Settings.model"

export interface GameData {
    settings: Settings;
    players: Player[];
    currentPlayer: Player;
    isMultiplayer(): boolean;
    gameOver: boolean;
    winners: Player[];
}