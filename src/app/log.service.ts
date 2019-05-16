
import { Injectable } from '@angular/core';
import { LogEvent } from './log-event';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private events: LogEvent[] = [];
  private observableList: BehaviorSubject<LogEvent[]> = new BehaviorSubject([]);

  constructor() { }

  getObservableList(): Observable<LogEvent[]> {
    return this.observableList.asObservable();
  }

  addEvent(event: LogEvent) {
    this.events.push(event);
    this.observableList.next(this.events);
  }

}
