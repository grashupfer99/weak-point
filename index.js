const sample = {
  data1: [
    [7, 2, 7, 2, 8],
    [2, 9, 4, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]
  ],
  data2: [
    [7, 2, 4, 2, 8],
    [2, 8, 1, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]
  ],
  data3: [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ]
}

const arrayCol = (arr, n) => arr.map(x => x[n]);
Array.prototype.getSum = function () {
  return this.reduce((val, acc) => val + acc, 0)
}

function getWeakPoint(data) {
  const MAX_POWER = 1000;
  const weakestRow = { cellNum: null, power: MAX_POWER };
  const weakestCol = { cellNum: null, power: MAX_POWER };

  for (let i = 0; i < data.length; i++) {
    const row = data[i].getSum();
    const col = arrayCol(data, i).getSum();

    if (row < weakestRow.power) {
      weakestRow.power = row;
      weakestRow.cellNum = i;
    }

    if (col < weakestCol.power) {
      weakestCol.power = col;
      weakestCol.cellNum = i
    }

  }

  return [weakestRow.cellNum, weakestCol.cellNum];
}

module.exports = {
  sample,
  arrayCol,
  getWeakPoint
}
