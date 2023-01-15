function getDistance(pA, pB) {
  console.log("There are 2 points A", pA, "and B", pB);
  a = pA.x1 - pB.x2;
  console.log("Ax - Bx =", a);
  b = pA.y1 - pB.y2
  console.log("Ay - By =", b);
  let result = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
  console.log("The distance from point A to point B in Canvas is: ", result);
}
console.warn("Case 1:");
getDistance({x1: -2, y1: 1}, {x2: 4, y2: 3});
console.warn("Case 2:");
getDistance({x1: 0, y1: 0}, {x2: 1, y2: 1});
console.warn("Case 3:");
getDistance({x1: 10, y1: -5}, {x2: 8, y2: 16});