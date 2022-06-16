// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// ------------------------------------------------------------

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let newArr = [];
  k = k % nums.length; // 如果 k 大于数组长度，则取余
  let index = 0;
  for (let i = nums.length - k; i < nums.length; i++) newArr[index++] = nums[i]; // 将数组最后 k 个元素(被翻转)放入新数组

  for (let i = 0; i < nums.length - k; i++) newArr[index++] = nums[i]; // 将数组剩余元素放入新数组

  for (let i = 0; i < nums.length; i++) nums[i] = newArr[i]; // 将新数组赋值给原数组
};
