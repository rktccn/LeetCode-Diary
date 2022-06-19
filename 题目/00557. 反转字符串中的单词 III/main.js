// 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// ----------------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .map((item) => {
      // 字符串按空格进行分隔, 每一个单词作为数组一个值
      return item.split("").reverse().join(""); // 遍历数组, 将每个值进行 reverse()
    })
    .join(" ");
};
