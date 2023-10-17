const {
  getSleepHours,
  getActualSleepHours,
  getIdealSleepHours,
  getFreeTimeHours,
  calculaeActivityTime,
  canDoActivities,
} = require('./Ex2');

describe('Ex2', () => {
  test('getSleepHours', () => {
    expect(getSleepHours('monday')).toBe(7);
    expect(getSleepHours('tuesday')).toBe(6);
    expect(getSleepHours('wednesday')).toBe(8);
    expect(getSleepHours('thursday')).toBe(7);
    expect(getSleepHours('friday')).toBe(6);
    expect(getSleepHours('saturday')).toBe(9);
    expect(getSleepHours('sunday')).toBe(8);
  });
  test('getActualSleepHours', () => {
    expect(getActualSleepHours()).toBe(51);
  });

  test('getIdealSleepHours', () => {
    expect(getIdealSleepHours()).toBe(56);
  });

  test('getFreeTimeHours', () => {
    expect(getFreeTimeHours()).toBe(5);
  });

  test('calculateActivityTime', () => {
    expect(
      calculaeActivityTime([
        { name: 'Gym', time: 1 },
        { name: 'Party', time: 2 },
        { name: 'Watch TV', time: 3 },
        { name: 'Play videogames', time: 5 },
      ])
    ).toBe(11);
  });

  test('canDoActivities', () => {
    expect(
      canDoActivities([
        { name: 'Gym', time: 1 },
        { name: 'Party', time: 2 },
        { name: 'Watch TV', time: 3 },
        { name: 'Play videogames', time: 5 },
      ])
    ).toBe("You can't do all the activities");
  });
});

/**
 *
 * https://jestjs.io/docs/en/expect
 */
