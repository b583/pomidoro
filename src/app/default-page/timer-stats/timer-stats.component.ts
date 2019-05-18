
import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/stats.service';
import { Stats } from 'src/app/stats';

@Component({
  selector: 'app-timer-stats',
  templateUrl: './timer-stats.component.html',
  styleUrls: ['./timer-stats.component.css']
})
export class TimerStatsComponent implements OnInit {

  private stats: Stats;
  private isEnabled: boolean;

  constructor(private statsService: StatsService) { 
    this.isEnabled = true;
  }

  ngOnInit() {
    this.stats = this.statsService.getStats();
    this.statsService.getObservableStats().subscribe(s => this.nextStats(s));
  }

  nextStats(s: Stats): void {
    this.stats = s;
  }

}
