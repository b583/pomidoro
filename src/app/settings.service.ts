import { Injectable } from '@angular/core';
import { Settings } from './settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings;

  constructor() {
    this.settings = new Settings();
    // TODO try to get settings from cookies
   }

   getSettings(): Settings {
    return this.settings;
   }

   updateSettings(newSettings: Settings) {
     this.settings = newSettings;
    //  TODO try topersist in cookies
   }

}
