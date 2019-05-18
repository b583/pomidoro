
import { Component, OnInit } from '@angular/core';
import { Settings } from '../settings';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  settings: Settings;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    console.log(this.settings.pomodoroLength);
  }

}
