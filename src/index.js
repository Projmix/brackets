module.exports = function check(str, bracketsConfig) {
  var after = str;
  do {
      var befor = after;
      for ([l, r] of bracketsConfig) {
        after = after.replace(`${l}${r}`, '');
      }
  } while (after !== befor)
  if(after) return false;
  else return true;
}