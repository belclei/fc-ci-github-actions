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
function kilobyteToByte(value) {
  return value * 1024
}
function megabyteToByte(value) {
  return kilobyteToByte(value) * 1024
}
function gigabyteToByte(value) {
  return megabyteToByte(value) * 1024
}
module.exports = {
  celsiusToFahrenheit,
  celsiusToKelvin,
  kelvinToCelsius,
  fahrenheitToCelsius,
  kilobyteToByte,
  megabyteToByte,
  gigabyteToByte
}
