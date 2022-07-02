"use strict";
const schedule1 = {
    workingTime: ['0900', '2200'],
    schedule: [['1100', '1230'], ['1330', '1500'], ['1600', '1800']]
};
const schedule2 = {
    workingTime: ['0800', '2000'],
    schedule: [['0800', '0930'], ['1030', '1100'], ['1130', '1200'], ['1330', '1500'], ['1600', '1800']]
};
const meetingTime = 30;
const getFreeTime = (schedule) => {
    let freeTime = [];
    freeTime.push([schedule.workingTime[0], schedule.schedule[0][0]]);
    schedule.schedule.map((meeting, index) => {
        var _a, _b;
        console.log(index, " -> ", meeting);
        freeTime.push([meeting[1], ((_b = (_a = schedule.schedule) === null || _a === void 0 ? void 0 : _a[index + 1]) === null || _b === void 0 ? void 0 : _b[0]) ? schedule.schedule[index + 1][0] : schedule.workingTime[1]]);
    });
    freeTime.map((timeSlot) => {
        if (timeSlot[0] !== timeSlot[1])
            console.log(timeSlot);
    });
    return [];
};
getFreeTime(schedule1);
getFreeTime(schedule2);
//# sourceMappingURL=meetingProblem.js.map