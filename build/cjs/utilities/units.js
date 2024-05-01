export function rem(target) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return "".concat(target / root, "rem");
}
export function pixelOrPercent(number) {
  return number > 1 ? rem(number) : "".concat(number * 100, "%");
}