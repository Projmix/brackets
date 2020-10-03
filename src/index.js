module.exports = function check(str, bracketsConfig) {
  var after = str;
  do {
      var befor = after;
      bracketsConfig.forEach(element => {
        after = after.replace(`${element[0]}${element[1]}`, '');
      });
  } while (after !== befor)
  return !after

}