import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/shared/models/Settings.model';
import { GridSetting } from '../../models/GridSetting.model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.less']
})
export class OptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public playerSettings: number[] = [1, 2, 3, 4];
  public GridSettings: GridSetting[] = [
    {
      number: 4,
      display: "4x4"
    },
    {
      number: 6,
      display: "6x6"
    }
  ]

  public settings: Settings = {
    playerCount: 1,
    grid: 4
  };
}
