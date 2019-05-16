
import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { LogEvent } from '../../log-event';

@Component({
  selector: 'app-timers-log',
  templateUrl: './timers-log.component.html',
  styleUrls: ['./timers-log.component.css']
})
export class TimersLogComponent implements OnInit {

  isEnabled: boolean;
  events: LogEvent[] = [];

  constructor(private logService: LogService) {
    this.isEnabled = false;
  }

  ngOnInit() {
    this.registerToLogService();
  }

  registerToLogService(): void {
    this.logService.getObservableList().subscribe(e => this.nextEvent(e));
  }

  nextEvent(e: LogEvent[]) {
    this.events = e;
  }

}
