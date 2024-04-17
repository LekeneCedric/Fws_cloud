export default class DateVo {
	date: Date;
	constructor() {
		this.date = new Date();
	}

	value(): string {
		return this.date.toISOString();
	}
}
