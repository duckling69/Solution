const assert = require('assert');
const solution = require('../solution');

describe('solution', () => {
  it('should return the correct output for valid input', () => {
    const input = {
      '2020-01-01': 4,
      '2020-01-02': 4,
      '2020-01-03': 6,
      '2020-01-04': 8,
      '2020-01-05': 2,
      '2020-01-06': -6,
      '2020-01-07': 2,
      '2020-01-08': -2,
    };
    const expectedOutput = {
      'Mon': -6,
      'Tue': 2,
      'Wed': 2,
      'Thu': 4,
      'Fri': 6,
      'Sat': 8,
      'Sun': 2,
    };
    const output = solution(input);
    assert.deepStrictEqual(output, expectedOutput);
  });

  it('should calculate mean value for missing days', () => {
    const input = {
      '2020-01-01': 6,
      '2020-01-04': 12,
      '2020-01-05': 14,
      '2020-01-06': 2,
      '2020-01-07': 4,
    };
    const expectedOutput = {
      'Mon': 2,
      'Tue': 4,
      'Wed': 6,
      'Thu': 3,
      'Fri': 8,
      'Sat': 12,
      'Sun': 14,
    };
    const output = solution(input);
    assert.deepStrictEqual(output, expectedOutput);
  });

  
});
