const sample = require('../index').sample;
const arrayCol = require('../index').arrayCol;
const getWeakPoint = require('../index').getWeakPoint;
const expect = require("chai").expect;

describe("arrayCol", () => {

  it("should be a function", () => {
    expect(arrayCol).to.be.a("function");
  })

  it("should return an array", () => {
    expect(arrayCol(sample.data1, 0)).to.be.an.instanceof(Array);
  })

});

describe("getWeakPoint", () => {

  it("should be a function", () => {
    expect(getWeakPoint).to.be.a("function");
  })

  it("should return an array", () => {
    expect(getWeakPoint(sample.data2)).to.be.an.instanceof(Array);
  })

  it("should return [3,3] for sample 1", () => {
    expect(getWeakPoint(sample.data1)).to.deep.equal([3, 3]);
  })

  it("should return [1,2] for sample 2", () => {
    expect(getWeakPoint(sample.data2)).to.deep.equal([1, 2]);
  })

  it("should return [0,0] for sample 3", () => {
    expect(getWeakPoint(sample.data3)).to.deep.equal([0, 0]);
  })

});
