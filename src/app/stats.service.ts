
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Stats } from './stats';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  static readonly POMODOROS_DONE = 'pomodorosDone';
  static readonly SHORT_BREAKS_DONE = 'shortBreaksDone';
  static readonly LONG_BREAKS_DONE = 'longBreaksDone';

  private stats: Stats;
  private observableStats: BehaviorSubject<Stats>
    = new BehaviorSubject(new Stats());

  constructor() {
    this.stats = this.getStatsFromStorage();
    this.updateStats(this.stats);
  }

  updateStats(newStats: Stats): void {
    this.stats = newStats;
    localStorage.setItem(StatsService.POMODOROS_DONE, this.stats.donePomodoros.toString());
    localStorage.setItem(StatsService.SHORT_BREAKS_DONE, this.stats.doneShortBreaks.toString());
    localStorage.setItem(StatsService.LONG_BREAKS_DONE, this.stats.doneLongBreaks.toString());
    this.observableStats.next(this.stats);
  }

  getStatsFromStorage(): Stats {
    let newStats = new Stats();

    if (this.getSetting(StatsService.POMODOROS_DONE) !== null) {
      newStats.donePomodoros = parseInt(this.getSetting(StatsService.POMODOROS_DONE));
    }

    if (this.getSetting(StatsService.SHORT_BREAKS_DONE) !== null) {
      newStats.doneShortBreaks = parseInt(this.getSetting(StatsService.SHORT_BREAKS_DONE));
    }

    if (this.getSetting(StatsService.LONG_BREAKS_DONE) !== null) {
      newStats.doneLongBreaks = parseInt(this.getSetting(StatsService.LONG_BREAKS_DONE));
    }

    return newStats;
  }

  incrementPomodoros(): void {
    this.stats.donePomodoros = this.stats.donePomodoros + 1;
    this.updateStats(this.stats);
  }

  incrementShortBreaks(): void {
    this.stats.doneShortBreaks = this.stats.doneShortBreaks + 1;
    this.updateStats(this.stats);
  }

  incrementLongBreaks(): void {
    this.stats.doneLongBreaks = this.stats.doneLongBreaks + 1;
    this.updateStats(this.stats);
  }

  getSetting(setting: string): string {
    return localStorage.getItem(setting);
  }

  getObservableStats(): Observable<Stats> {
    return this.observableStats.asObservable();
  }

  getStats(): Stats {
    return this.stats;
  }

}
