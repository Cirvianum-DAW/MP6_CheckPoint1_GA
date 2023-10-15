const { taulerEscacs } = require('./Ex1');

const {
  getSleepHours,
  getActualSleepHours,
  getIdealSleepHours,
  getFreeTimeHours,
  calculaeActivityTime,
  canDoActivities,
} = require('./Ex2');

const { users } = require('./data_ex3');

const { getUsersByHobby, friendsAverageAge, sharedHobbies } = require('./Ex3');

describe('Ex1', () => {
  test("genera un tauler d'escacs de 8x8", () => {
    const expectedOutput =
      ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n';
    expect(taulerEscacs()).toBe(expectedOutput);
  });
});

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

  test('calculaeActivityTime', () => {
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

describe('Ex3', () => {
  it('should return an array of user names who have the given hobby', () => {
    const expected = ['John', 'Charlie'];
    const result = getUsersByHobby('running');
    expect(result).toEqual(expected);
  });

  it('should return the average age of the user friends', () => {
    const expected = 31;
    // En aquest cas miro la mitjana d'edat dels amics de l'usuari amb id 2
    const result = friendsAverageAge(2);
    expect(result).toEqual(expected);
  });

  it('should return an array of hobbies shared between the user and their friends', () => {
    const expected = ['reading', 'running'];
    const result = sharedHobbies(5);
    expect(result).toEqual(expected);
  });
});

/**
 *
 * https://jestjs.io/docs/en/expect
 */
