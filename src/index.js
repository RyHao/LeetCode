const twoSum = require('./twoSum')
const lengthOfLongestSubstring = require('./lengthOfLongestSubstring')

// 2017/01/04 TwoSum
const nums = [2, 3, 4];
const target = 6;
console.log('Two Sum');
console.log(`Input - nums: ${nums}, target: ${target}`);
console.log('Result: ', twoSum(nums, target));
console.log('============================================================');
// 2017/04/04 Longest Substring Without Repeating Characters
const str = 'dvdf';
console.log('Longest Substring Without Repeating Characters');
console.log(`Input - string: ${str}, logest substrig length: 3`);
console.log('Result: ', lengthOfLongestSubstring(str));
