/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = []
    var mapping = {}
    nums.some((num, idx) => {
        if (typeof mapping[target - num] !== 'undefined') {
            result.push(mapping[target - num], idx)
            return true
        }
        mapping[num] = idx
        return false
    })
    return result
};

module.exports = twoSum;
