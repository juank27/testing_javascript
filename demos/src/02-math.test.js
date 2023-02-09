const {sum, multiply, divide, rest} = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3);
});

test('multiply 1 * 2 to equal 2', () => {
   expect(multiply(1, 2)).toBe(2);
});

test('divide 1 / 2 to equal 0.5', () => {
   const rta = divide(1, 2);
   expect(rta).toBe(0.5);
   const rta2 = divide(10, 2);
   expect(rta2).toBe(5);
});

test('divide 1 / 0 to equal null', () => {
   const rta = divide(1, 0);
   expect(rta).toBeNull();
});

test('rest 1 - 2 to equal -1', () => {
   expect(rest(1, 2)).toBe(-1);
});
