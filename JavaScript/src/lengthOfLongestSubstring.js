/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     if (!s.length) return 0;
//     var start = 0;
//     var maxLength = 0;
//     var charMap = new Map();
//     for (var i = 0 ; i < s.length ; i += 1) {
//         var c = s[i];
//         if (charMap.has(c) && start <= charMap.get(c)) {
//             start = charMap.get(c) + 1;
//         } else {
//             maxLength = Math.max(maxLength, i - start + 1);
//         }
//         charMap.set(c, i);
//     }
//     return maxLength;
// };

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = {};
  var left = 0;

  return s.split('').reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
};

module.exports = lengthOfLongestSubstring;
