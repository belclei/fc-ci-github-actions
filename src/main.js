function celsiusToFahrenheit(value) {
  return (value * 9) / 5 + 32
}
function celsiusToKelvin(value) {
  return value + 273.15
}
function kelvinToCelsius(value) {
  return value - 273.15
}
function fahrenheitToCelsius(value) {
  return ((value - 32) * 5) / 9
}

module.exports = { celsiusToFahrenheit, celsiusToKelvin, kelvinToCelsius, fahrenheitToCelsius }
