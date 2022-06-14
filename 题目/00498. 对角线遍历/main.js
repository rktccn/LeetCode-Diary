// 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
// --------------------------------------------------------------------

var findDiagonalOrder = function (mat) {
  let xMax = mat.length,
    yMax = mat[0].length;
  let result = [];
  let flag = -1, // -1表示往右上，1表示往左下
    level = 2; // 当前层数
  let cY = 1, // 当前列
    cX = 1; // 当前行

  let max = xMax + yMax;

  while (level <= max) {
    result.push(mat[cX - 1][cY - 1]);

    if (flag === -1) {
      if (cY === yMax) {
        // 如果到达最右边，则往下一层
        cX++;
        flag = 1;
        level++;
        continue;
      }

      if (cX === 1) {
        // 如果到达最上边，则往右一层
        cY++;
        flag = 1;
        level++;
        continue;
      }
      cY++;
      cX--;
    } else {
      if (cX === xMax) {
        // 如果到达最下边，则往右一层
        cY++;
        flag = -1;
        level++;
        continue;
      }

      if (cY === 1) {
        // 如果到达最左边，则往下一层
        cX++;
        flag = -1;
        level++;
        continue;
      }
      cY--;
      cX++;
    }
  }
  return result;
};
