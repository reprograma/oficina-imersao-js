const sum = require('./sum');

describe("Testanto a função sum", () => {

test('adicionando 1 + 2 e não pode retornar 0', () => {
  expect(sum(1, 2)).not.toBe(0);
});

test("adicionando 2 + 2 e retornando 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

});