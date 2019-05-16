
import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { LogEvent } from '../../log-event';

@Component({
  selector: 'app-timers-log',
  templateUrl: './timers-log.component.html',
  styleUrls: ['./timers-log.component.css']
})
export class TimersLogComponent implements OnInit {

  isDisabled: boolean;
  logEvents: LogEvent[];

  constructor(private logService: LogService) {
    this.isDisabled = false;
  }

  ngOnInit() {
    this.logEvents = this.logService.getLogEvents();
  }

}
