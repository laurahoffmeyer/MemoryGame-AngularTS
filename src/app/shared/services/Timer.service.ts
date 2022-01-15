import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Timer {

  constructor() { }

  public formattedTime: string = '00:00';
  private minutes: number = 0;
  private seconds: string = '';
  private currentTime: number = 0;
  private timerInterval = 0;
  
  public GetFormattedTime() {
    return this.formattedTime;
  }

  public SetTimer() {
    const startTime = Date.now() - (this.currentTime || 0);
    this.timerInterval = setInterval(() => {
        this.currentTime = Date.now() - startTime;
        this.minutes = Math.floor(this.currentTime / 60000);
        this.seconds = ((this.currentTime % 60000) / 1000).toFixed(0);
        this.formattedTime = parseInt(this.seconds) === 60 ?
          (this.minutes+1) + ":00" :
          this.minutes + ":" + (parseInt(this.seconds) < 10 ? "0" : "") + parseInt(this.seconds);
    });
  }
  
  public StopTimer() {
    clearInterval(this.timerInterval);
    this.currentTime = 0;
  }
  
  public ResetTimer() {
    this.StopTimer();
    this.formattedTime = '00:00';
    this.currentTime = 0;
    this.SetTimer();
  }
}