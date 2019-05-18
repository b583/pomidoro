
export class Settings {

    pomodorosInSession: number;
    pomodoroLength: number;
    shortBreakLength: number;
    longBreakLength: number;

    isLogCardHidden: boolean;
    isLogCardDisabled: boolean;

    isStatsCardHidden: boolean;
    isStatsCardDisabled: boolean;

    constructor() {
        this.pomodorosInSession = 4;
        this.pomodoroLength = 25;
        this.shortBreakLength = 5;
        this.longBreakLength = 25;

        this.isLogCardHidden = false;
        this.isLogCardDisabled = false;
        
        this.isStatsCardHidden = false;
        this.isStatsCardDisabled = false;
    }

}
