import { Component, Input, OnInit } from '@angular/core';
import { Timer } from 'src/app/shared/services/Timer.service';

@Component({
  selector: 'app-singleplayertracker',
  templateUrl: './singleplayertracker.component.html',
  styleUrls: ['./singleplayertracker.component.less']
})
export class SingleplayertrackerComponent implements OnInit {

  constructor(private timer: Timer) { }

  @Input() moves:number = 0;

  get formattedTime(): string {
    return this.timer.GetFormattedTime();
  }
  
  ngOnInit(): void {
    this.timer.SetTimer();
  }
}