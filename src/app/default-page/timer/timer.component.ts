
import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { TimerType } from '../../timertype';
import { LogService } from '../../log.service';
import { LogEvent } from 'src/app/log-event';

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

  constructor(private logService: LogService) {
    this.isTimerRunning = false;
    this.whichPomodoroInSession = 0;
    this.intervalTimer = interval(1000);
  }

  ngOnInit() {
    // TODO Add settings service
    // TODO change to 25, 5, 15 later
    this.pomodoroLength = 1;
    this.shortBreakLength = 1;
    this.longBreakLength = 1;
    this.pomodorosInSession = 3;

    this.nextTimer();
  }

  startTimer(): void {

    // Test LogService
    // TODO remove later
    this.logService.addEvent(new LogEvent("TEST"));

    this.isTimerRunning = true;
    this.intervalTimerSubscription
      = this.intervalTimer.subscribe(n => this.handlePassedSecond());
  }

  pauseTimer(): void {
    this.isTimerRunning = false;
    this.intervalTimerSubscription.unsubscribe();
  }

  skipTimer(): void {
    if (this.intervalTimerSubscription !== undefined) {
      this.pauseTimer();
    }
    this.nextTimer();
  }

  resetTimer(): void {
    if (this.intervalTimerSubscription !== undefined) {
      this.pauseTimer();
    }
    this.whichPomodoroInSession = 0;
    this.currentTimerType = TimerType.LONG_BREAK;
    this.nextTimer();
  }

  handlePassedSecond(): void {
    this.timeRemaining -= 1000;
    if (this.timeRemaining <= 0) {
      // TODO Implement user notification
      this.pauseTimer();
      this.nextTimer();
    }
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
    if (this.timeRemaining >= 0) {
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
    } else {
      return '00:00';
    }
  }

}
