import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { TimerType } from './timertype';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  isTimerRunning: boolean;
  whichPomodoroInSession: number;
  currentTimerType: TimerType;
  pomodoroLength: number;
  shortBreakLength: number;
  longBreakLength: number;
  pomodorosInSession: number;
  intervalTimer: Observable<number>;
  intervalTimerSubscription: Subscription;
  timeRemaining: number;
  timePassedString: string;

  constructor() {
    this.isTimerRunning = false;
    this.whichPomodoroInSession = 0;
    this.intervalTimer = interval(1000);
  }

  ngOnInit() {
    // TODO Add settings service
    this.pomodoroLength = 25;
    this.shortBreakLength = 5;
    this.longBreakLength = 15;
    this.pomodorosInSession = 3;

    this.nextTimer();
  }

  negateTimerRunning(): void {
    this.isTimerRunning = !this.isTimerRunning;
  }

  startTimer(): void {
    this.negateTimerRunning();
    // TODO implement
  }

  pauseTimer(): void {
    this.negateTimerRunning();
    // TODO implement
  }

  skipTimer(): void {
    this.negateTimerRunning();
    this.nextTimer();
  }

  resetTimer(): void {
    this.negateTimerRunning();
    this.whichPomodoroInSession = 0;
    this.nextTimer();
  }

  handlePassedSecond(): void {
    // TODO implement
  }

  nextTimer(): void {
    this.currentTimerType = this.determineNextTimerType();
    switch (this.currentTimerType) {
      case TimerType.POMODORO: {
        this.whichPomodoroInSession++;
        this.timeRemaining = this.pomodoroLength * 60000;
        break;
      }
      case TimerType.SHORT_BREAK: {
        this.timeRemaining = this.shortBreakLength * 60000;
        break;
      }
      case TimerType.LONG_BREAK: {
        this.whichPomodoroInSession = 0;
        this.timeRemaining = this.longBreakLength * 60000;
        break;
      }
      default: {
        throw new Error('Not supported TimerType!');
      }
    }
  }

  determineNextTimerType(): TimerType {
    if (this.currentTimerType === TimerType.POMODORO) {
      if (this.whichPomodoroInSession !== this.pomodorosInSession) {
        return TimerType.SHORT_BREAK;
      } else {
        return TimerType.LONG_BREAK;
      }
    }
    return TimerType.POMODORO;
  }

  generateComingNextString(): string {
    return 'Next: ' + this.determineNextTimerType().toString();
  }

  generateTimeRemainingString(): string {
    const min = Math.floor(this.timeRemaining / 60000);
    const sec = Math.floor((this.timeRemaining - 60000 * min) / 1000);
    let timeString = '';
    if (min < 10) {
      timeString += '0' + min;
    } else {
      timeString += min;
    }
    timeString += ':';
    if (sec < 10) {
      timeString += '0' + sec;
    } else {
      timeString += sec;
    }
    return timeString;
  }

}
