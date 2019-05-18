import { Injectable } from '@angular/core';
import { Settings } from './settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  static readonly POMODOROS_IN_SESSION = 'pomodorosInSession';
  static readonly POMODORO_LENGTH = 'pomodoroLength';
  static readonly SHORT_BREAK_LENGTH = 'shortBreakLenght';
  static readonly LONG_BREAK_LENGTH = 'longBreakLenght';

  static readonly IS_LOG_CARD_HIDDEN = 'isLogCardHidden';
  static readonly IS_LOG_CARD_DISABLED = 'isLogCardDisabled';

  static readonly IS_STATS_CARD_HIDDEN = 'isStatsCardHidden';
  static readonly IS_STATS_CARD_DISABLED = 'isStatsCardDisabled';

  private settings: Settings;

  constructor() {
    this.settings = this.getSettingsFromStorage();
    this.updateSettings(this.settings);
  }

  static isStringTrue(s: string): boolean {
    if (s.toLowerCase() === 'true') {
      return true;
    } 
    return false;
  }

  private getSetting(setting: string): string {
    return localStorage.getItem(setting);
  }

  getSettingsFromStorage(): Settings {
    let newSettings = new Settings();
    
    if (this.getSetting(SettingsService.POMODOROS_IN_SESSION) !== null) {
      newSettings.pomodorosInSession 
        = parseInt(this.getSetting(SettingsService.POMODOROS_IN_SESSION));
    }
    
    if (this.getSetting(SettingsService.POMODORO_LENGTH) !== null) {
      newSettings.pomodoroLength 
        = parseInt(this.getSetting(SettingsService.POMODORO_LENGTH));
    }

    if (this.getSetting(SettingsService.SHORT_BREAK_LENGTH) !== null) {
      newSettings.shortBreakLength 
        = parseInt(this.getSetting(SettingsService.SHORT_BREAK_LENGTH));
    }

    if (this.getSetting(SettingsService.LONG_BREAK_LENGTH) !== null) {
      newSettings.longBreakLength 
        = parseInt(this.getSetting(SettingsService.LONG_BREAK_LENGTH));
    }

    if (this.getSetting(SettingsService.IS_LOG_CARD_HIDDEN) !== null) {
      newSettings.isLogCardHidden 
        = SettingsService.isStringTrue(this.getSetting(SettingsService.IS_LOG_CARD_HIDDEN));
    }

    if (this.getSetting(SettingsService.IS_LOG_CARD_DISABLED) !== null) {
      newSettings.isLogCardDisabled 
        = SettingsService.isStringTrue(this.getSetting(SettingsService.IS_LOG_CARD_DISABLED));
    }

    if (this.getSetting(SettingsService.IS_STATS_CARD_HIDDEN) !== null) {
      newSettings.isStatsCardHidden 
        = SettingsService.isStringTrue(this.getSetting(SettingsService.IS_STATS_CARD_HIDDEN));
    }

    if (this.getSetting(SettingsService.IS_LOG_CARD_DISABLED) !== null) {
      newSettings.isStatsCardDisabled 
        = SettingsService.isStringTrue(this.getSetting(SettingsService.IS_LOG_CARD_DISABLED));
    }

    return newSettings;   
  }

  getSettings(): Settings {
    return this.settings;
  }

  updateSettings(newSettings: Settings) {
    this.settings = newSettings;
  
    localStorage.setItem(SettingsService.POMODOROS_IN_SESSION, this.settings.pomodorosInSession.toString());
    localStorage.setItem(SettingsService.POMODORO_LENGTH, this.settings.pomodoroLength.toString());
    localStorage.setItem(SettingsService.SHORT_BREAK_LENGTH, this.settings.shortBreakLength.toString());
    localStorage.setItem(SettingsService.LONG_BREAK_LENGTH, this.settings.longBreakLength.toString());

    localStorage.setItem(SettingsService.IS_LOG_CARD_HIDDEN, this.settings.isLogCardHidden.toString());
    localStorage.setItem(SettingsService.IS_LOG_CARD_DISABLED, this.settings.isLogCardDisabled.toString());

    localStorage.setItem(SettingsService.IS_STATS_CARD_HIDDEN, this.settings.isStatsCardHidden.toString());    
    localStorage.setItem(SettingsService.IS_STATS_CARD_DISABLED, this.settings.isStatsCardDisabled.toString());  
  }

}
