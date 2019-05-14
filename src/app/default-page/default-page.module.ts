import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './default-page/default-page.component';
import { TimerComponent } from './timer/timer.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [DefaultPageComponent, TimerComponent],
  imports: [
    CommonModule,
    // Material
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class DefaultPageModule { }
