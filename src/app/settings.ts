
export class Settings {

    pomodorosInSession: number;
    pomodoroLength: number;
    shortBreakLength: number;
    longBreakLength: number;

    isLogHidden: boolean;
    isStatsHidden: boolean;

    constructor() {
        this.pomodorosInSession = 4;
        this.pomodoroLength = 25;
        this.shortBreakLength = 5;
        this.longBreakLength = 25;

        this.isLogHidden = false;
        this.isStatsHidden = false;
    }

}
