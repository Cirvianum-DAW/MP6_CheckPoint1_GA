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

// Sumem les hores de cada dia fins diumenge
// Compte perquè "idealHoursDay" no és un dia de la setmana
// Per tant, no el podem sumar
// I si volem treballar amb iteració, hem de passar els dies a un array --> Object.keys(sleepHours)
const getActualSleepHours = () => {
  let totalHours = 0;
  const days = Object.keys(sleepHours);
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    if (day !== 'idealHoursDay') {
      totalHours += sleepHours[day];
    }
  }
  return totalHours;
};

// Multipliquem les hores que volem dormir per dia per 7 dies
const getIdealSleepHours = () => {
  return sleepHours.idealHoursDay * 7;
};

//Opció 1 - El que us vaig cometar a classe; simplement restem les hores que dormim de les que volem dormir
const getFreeTimeHours = () => {
  return getIdealSleepHours() - getActualSleepHours();
};

//Opció 2 - Tenint en compte les hores treballades, els dies de la setmana i segurament la opció més lògica
// Li trec a la setmana les hores que treballo i les hores que dormo
const getFreeTimeHours2 = () => {
  const hoursWeek = 24 * 7;
  const hoursWorked = workHours * 5;
  return hoursWeek - hoursWorked - getActualSleepHours();
};

// Calculem el temps total que duren totes les activitats que ens hem proposat
const calculateActivityTime = (activities) => {
  let totalHours = 0;
  for (let i = 0; i < activities.length; i++) {
    totalHours += activities[i].time;
  }
  return totalHours;
};

// En funció del temps que tenim lliure, podem fer totes les activitats o no
const canDoActivities = (activities) => {
  const freeTime = getFreeTimeHours();
  const totalActivityTime = calculateActivityTime(activities);
  if (freeTime >= totalActivityTime) {
    return 'Pots fer totes les activitats';
  } else {
    return 'No pots fer totes les activitats';
  }
};

module.exports = {
  getSleepHours,
  getActualSleepHours,
  getIdealSleepHours,
  getFreeTimeHours,
  calculateActivityTime,
  canDoActivities,
};
