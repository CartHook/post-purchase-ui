// Our component API supports full names for all autocomplete attributes.
// This map and the autocompleteToHtml() function map the strings back into
// the values expected by the <input autocomplete /> prop.
var AUTOCOMPLETE_MAP = new Map([['telephone', 'tel'], ['credit-card', 'cc'], ['birthday', 'bday'], ['expiry', 'exp'], ['security-code', 'csc'], ['instant-message', 'impp']]);
export function autocompleteToHtml(autocomplete) {
  if (autocomplete == null) return undefined;
  if (autocomplete === false) return 'none';
  if (autocomplete === true) return 'on';
  var group = autocomplete.group,
    field = autocomplete.field;
  var normalizedField = field.replace(/(?:telephone|credit-card|expiry|security-code|instant-message)/g, function (part) {
    var _AUTOCOMPLETE_MAP$get;
    return (_AUTOCOMPLETE_MAP$get = AUTOCOMPLETE_MAP.get(part)) !== null && _AUTOCOMPLETE_MAP$get !== void 0 ? _AUTOCOMPLETE_MAP$get : part;
  });
  return group ? "".concat(group, " ").concat(normalizedField) : normalizedField;
}