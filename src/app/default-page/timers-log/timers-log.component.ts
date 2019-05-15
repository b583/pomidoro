import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timers-log',
  templateUrl: './timers-log.component.html',
  styleUrls: ['./timers-log.component.css']
})
export class TimersLogComponent implements OnInit {

  isDisabled: boolean;

  constructor() {
    this.isDisabled = false;
  }

  ngOnInit() {
  }

}
