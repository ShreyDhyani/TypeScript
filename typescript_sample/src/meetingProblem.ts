type Meeting = [string, string];

type Schedule = {
  workingTime: [string, string];
  schedule: Meeting[]
}

// const calculateTotalMeetingTimeInMinutes = (schedule: Schedule): string => {
//   let totalMeetingTime: number = 0;
//   schedule.schedule.map((meeting: Meeting): void => {
//     totalMeetingTime += parseInt(meeting[1]) - parseInt(meeting[0]);
//   })
//   return totalMeetingTime.toString();
// }
//Input to be given to Code
const schedule1: Schedule = {
  workingTime: ['0900', '2200'],
  schedule: [['1100', '1230'], ['1330', '1500'], ['1600', '1800']]
};

const schedule2: Schedule = {
  workingTime: ['0800', '2000'],
  schedule: [['0800', '0930'], ['1030', '1100'], ['1130', '1200'], ['1330', '1500'], ['1600', '1800']]
};

const meetingTime: number = 30;
//Input ends


const getFreeTime = (schedule: Schedule): Meeting[] => {
  let freeTime: [string, string][] = [];
  freeTime.push([schedule.workingTime[0], schedule.schedule[0][0]])
  schedule.schedule.map((meeting,index)=>{
    console.log(index, " -> ", meeting);
    freeTime.push([meeting[1] , (schedule.schedule?.[index+1]?.[0]) ? schedule.schedule[index+1][0] : schedule.workingTime[1] ] );
  });
  freeTime.map((timeSlot)=>{
    if(timeSlot[0] !== timeSlot[1])
      console.log(timeSlot);
  })
  return [];
}


getFreeTime(schedule1);
getFreeTime(schedule2);

