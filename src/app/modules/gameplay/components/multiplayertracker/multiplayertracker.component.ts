import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../../../shared/models/Player.model';

@Component({
  selector: 'app-multiplayertracker',
  templateUrl: './multiplayertracker.component.html',
  styleUrls: ['./multiplayertracker.component.less']
})
export class MultiplayertrackerComponent implements OnInit {

  constructor() { }

  @Input() players:Player[] = [];
  @Input() currentPlayer:Player = this.players[0];

  ngOnInit(): void {}
}
