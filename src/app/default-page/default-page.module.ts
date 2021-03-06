import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DefaultPageComponent } from './default-page/default-page.component';
import { TimerComponent } from './timer/timer.component';
import { TimersLogComponent } from './timers-log/timers-log.component';
import { TimerStatsComponent } from './timer-stats/timer-stats.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Services
import { LogService } from '../log.service';
import { StatsService } from '../stats.service';

@NgModule({
  declarations: [DefaultPageComponent, TimerComponent, TimersLogComponent, TimerStatsComponent],
  imports: [
    CommonModule,
    FormsModule,
    // Material
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  providers: [
    // Services
    LogService,
    StatsService
  ]
})
export class DefaultPageModule { }
