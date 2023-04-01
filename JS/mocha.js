const assert = require('assert');
const Rooster = require('../index')

describe('rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';
      const coq = Rooster.announceDawn()
      assert.equal(expected, coq);
    })
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const hour = 12
      expected = '12'
      assert.strictEqual(expected, Rooster.timeAtDawn(hour));
    });
    it('throws an error if passed a number less than 0', () => {
      const hour = -2
      assert.throws(() => {Rooster.timeAtDawn(hour)},RangeError);
    });
    it('throws an error if passed a number greater than 23', () => {
      const hour = 36
      assert.throws(() => {Rooster.timeAtDawn(hour)},RangeError);
    });
  })
})