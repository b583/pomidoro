
export class LogEvent {

    date: Date;
    content: string;

    constructor(content: string) {
        this.content = content;
        this.date = new Date();
    }

    getDate(): Date {
        return this.date;
    }

    getContent(): string {
        return this.content;
    }

}
