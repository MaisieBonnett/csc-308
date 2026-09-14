const myFunctions = require('./function.js');

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing div -- success', () => {
  const target = 5;
  const result = myFunctions.div(10, 2);
  expect(target).toBe(result);
});

test('Testing div -- divide zero', () => {
  const target = Infinity;
  const result = myFunctions.div(10, 0);
  expect(target).toBe(result);
});

test('Testing containsNumbers -- true', () => {
  const target = true;
  const result = myFunctions.containsNumbers("whats5up");
  expect(target).toBe(result);
});

test('Testing containsNumbers -- false', () => {
  const target = false;
  const result = myFunctions.containsNumbers("whats up");
  expect(target).toBe(result);
});

test('Testing containsNumbers -- empty string', () => {
  const target = false;
  const result = myFunctions.containsNumbers("");
  expect(target).toBe(result);
});
