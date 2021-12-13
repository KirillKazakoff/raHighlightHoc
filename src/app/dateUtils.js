/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { DateTime } from 'luxon';

class Time {
    constructor() {
        this.getTime();
    }

    getTime() {
        this.current = DateTime.now();
    }

    getDiff(differed) {
        return this.current.diff(differed);
    }

    compareTime(dataStr) {
        this.getTime();

        const dataTime = DateTime.fromFormat(dataStr, 'yyyy-LL-dd hh:mm:ss');
        const diff = this.getDiff(dataTime);
        const diffSeconds = diff.as('seconds');

        if (diffSeconds < 3600) {
            return this.getDiffStrResult(diff, 'minutes');
        }
        if (diffSeconds < 86400) {
            return this.getDiffStrResult(diff, 'hours');
        }
        return this.getDiffStrResult(diff, 'days');
    }

    getDiffStrResult(diff, dateParam) {
        const res = diff.as(dateParam).toFixed();
        if (res < 0) return 'date error';

        switch (dateParam) {
        case 'minutes': {
            return `${res} минут назад`;
        }

        case 'hours': {
            return `${res} часов назад`;
        }

        case 'days': {
            return `${res} суток назад`;
        }
        default: {
            return false;
        }
        }
    }
}

const time = new Time();
export default time;
