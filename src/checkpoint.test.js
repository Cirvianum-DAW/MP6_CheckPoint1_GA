const { suma } = require('./suma');
const { taulerEscacs } = require('./Ex1');

describe('checkpoint', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3);
  });
  test("genera un tauler d'escacs de 8x8", () => {
    const expectedOutput =
      ' # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n';
    expect(taulerEscacs()).toBe(expectedOutput);
  });
});

/**
 *
 * https://jestjs.io/docs/en/expect
 */
