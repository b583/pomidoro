
import { Injectable } from '@angular/core';
import { LogEvent } from './log-event';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  getLogEvents(): LogEvent[] {
    return [
      new LogEvent('test1'),
      new LogEvent('test2'),
      new LogEvent('test3'),
      new LogEvent('test4'),
      new LogEvent('test5')
    ]
  }
}
