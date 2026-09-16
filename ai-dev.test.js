const assert = require("assert");
const { calcFare } = require("./ai-dev");

const testCases = [
  [0, 10],
  [2, 10],
  [2.1, 12],
  [3.01, 14],
  [-1, 0],
  ["2", 0],
  [NaN, 0],
];

for (const [distanceKm, expectedFare] of testCases) {
  assert.strictEqual(calcFare(distanceKm), expectedFare);
}

console.log("ทุกการทดสอบผ่าน");