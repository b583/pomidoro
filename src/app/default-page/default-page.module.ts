import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultPageComponent } from './default-page/default-page.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [DefaultPageComponent, TimerComponent],
  imports: [
    CommonModule
  ]
})
export class DefaultPageModule { }
