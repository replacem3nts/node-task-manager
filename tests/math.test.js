const {
  calcTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require('../src/math');

test('Should calculate total with tip', () => {
  const total = calcTip(10, 0.3);
  expect(total).toBe(13);
});

test('Should calculate total with default tip', () => {
  const total = calcTip(10);
  expect(total).toBe(12.5);
});

test('Should convert fahrenheit to celsius', () => {
  const celsius = fahrenheitToCelsius(32);
  expect(celsius).toBe(0);
});

test('Should convert celsius to fahrenheight', () => {
  const fahrenheit = celsiusToFahrenheit(0);
  expect(fahrenheit).toBe(32);
});

// test('Async test demo', done => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

test('Should add two numbers', done => {
  add(2, 3).then(sum => {
    expect(sum).toBe(5);
    done();
  });
});

test('Should add two numbers async/await', async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
