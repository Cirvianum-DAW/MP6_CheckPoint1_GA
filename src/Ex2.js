const sleepHours = {
  monday: 7,
  tuesday: 6,
  wednesday: 8,
  thursday: 7,
  friday: 6,
  saturday: 9,
  sunday: 8,
  idealHoursDay: 8,
};

const workHours = 8;

const activities = [
  { name: 'Gym', time: 1 },
  { name: 'Party', time: 2 },
  { name: 'Watch TV', time: 3 },
  { name: 'Play videogames', time: 5 },
];

const getSleepHours = (day) => {
  return sleepHours[day];
};

const getActualSleepHours = () => {
  let totalHours = 0;
  for (let day in sleepHours) {
    if (day !== 'idealHoursDay') {
      totalHours += getSleepHours(day);
    }
  }
  return totalHours;
};

const getIdealSleepHours = () => {
  return sleepHours.idealHoursDay * 7;
};

const getFreeTimeHours = () => {
  return getIdealSleepHours() - getActualSleepHours();
};

const calculaeActivityTime = (activities) => {
  let totalHours = 0;
  for (let activity of activities) {
    totalHours += activity.time;
  }
  return totalHours;
};

const canDoActivities = (activities) => {
  if (calculaeActivityTime(activities) <= getFreeTimeHours()) {
    console.log('You can do all the activities');
    return 'You can do all the activities';
  } else {
    console.log("You can't do all the activities");
    return "You can't do all the activities";
  }
};

module.exports = {
  getSleepHours,
  getActualSleepHours,
  getIdealSleepHours,
  getFreeTimeHours,
  calculaeActivityTime,
  canDoActivities,
};
