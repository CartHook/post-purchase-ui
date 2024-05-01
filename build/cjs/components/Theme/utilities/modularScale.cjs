export function modularScale(point, base) {
  var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.285;
  var baseValue = typeof base === 'string' ? parseFloat(base) : base;
  var ratioValue = typeof ratio === 'string' ? parseFloat(ratio) : ratio;
  return "".concat(Math.pow(ratioValue, point) * (baseValue / 10), "rem");
}