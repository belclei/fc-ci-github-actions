import { celsiusToFahrenheit, fahrenheitToCelsius } from './main'

test('0°C must be 32°F', () => {
  expect(celsiusToFahrenheit(0)).toBe(32)
})
test('32°F must be 0°C', () => {
  expect(fahrenheitToCelsius(32)).toBe(0)
})
