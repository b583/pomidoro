
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private pomodorosCompleted: number;
  private shortBreaksCompleted: number;
  private longBreaksCompleted: number;

  private observablePomodorosCompleted: BehaviorSubject<number> = new BehaviorSubject(0);
  private observableShortBreaksCompleted: BehaviorSubject<number> = new BehaviorSubject(0);
  private observableLongBreaksCompleted: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.pomodorosCompleted = 0;
    this.shortBreaksCompleted = 0;
    this.longBreaksCompleted = 0;
  }

  getObservablePomodoros(): Observable<number> {
    return this.observablePomodorosCompleted.asObservable();
  }

  getObservableShortBreaks(): Observable<number> {
    return this.observableShortBreaksCompleted.asObservable();
  }

  getObservableLongBreaks(): Observable<number> {
    return this.observableLongBreaksCompleted.asObservable();
  }

  completePomodoro(): void {
    this.pomodorosCompleted++;
    this.observablePomodorosCompleted.next(this.pomodorosCompleted);
  }

  completeShortBreak(): void {
    this.shortBreaksCompleted++;
    this.observableShortBreaksCompleted.next(this.shortBreaksCompleted);
  }

  completeLongBreak(): void {
    this.longBreaksCompleted++;
    this.observableLongBreaksCompleted.next(this.longBreaksCompleted);
  }

}
