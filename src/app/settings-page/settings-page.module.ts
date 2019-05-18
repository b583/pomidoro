import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

//Services
import { SettingsService } from '../settings.service';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [
    CommonModule,
    // Material
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    // Services
    SettingsService]
})
export class SettingsPageModule { }
