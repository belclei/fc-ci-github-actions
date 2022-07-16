const convert = require('./main')

test('0°C must be 32°F', () => {
  expect(convert.celsiusToFahrenheit(0)).toBe(32)
})
test('32°F must be 0°C', () => {
  expect(convert.fahrenheitToCelsius(32)).toBe(0)
})
