const sum = require('./sum');

describe('sum', () => {
  it('should sum 1+2=3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('should not be 0', () => {
    expect(sum(1,2)).not.toBe(0)
  })
})