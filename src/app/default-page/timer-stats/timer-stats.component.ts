
import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/stats.service';

@Component({
  selector: 'app-timer-stats',
  templateUrl: './timer-stats.component.html',
  styleUrls: ['./timer-stats.component.css']
})
export class TimerStatsComponent implements OnInit {

  private pomodoros: number;
  private shortBreaks: number;
  private longBreaks: number;
  private isEnabled: boolean;

  constructor(private statsService: StatsService) { 
    this.pomodoros = 0;
    this.shortBreaks = 0;
    this.longBreaks = 0;
    this.isEnabled = true;
  }

  ngOnInit() {
  }

  registerToStatsService(): void {
    this.statsService.getObservablePomodoros().subscribe(n => this.nextPomodoros(n));
    this.statsService.getObservableShortBreaks().subscribe(n => this.nextShortBreaks(n));
    this.statsService.getObservableLongBreaks().subscribe(n => this.nextLongBreaks(n));
  }

  nextPomodoros(n: number): void { this.pomodoros = n; console.log('test')}
  nextShortBreaks(n: number): void { this.shortBreaks = n; }
  nextLongBreaks(n: number): void { this.longBreaks = n; }

}
