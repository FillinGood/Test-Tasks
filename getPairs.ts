function getPairs(arr: number[], sum: number): [number, number][] {
  const a = [...arr];
  const result: [number, number][] = [];
  while (a.length > 1) {
    for (let i = 1; i < a.length; i++) {
      if (a[i] + a[0] === sum) {
        result.push([a[0], a[i]]);
        a.splice(i, 1);
        break;
      }
    }
    a.splice(0, 1);
  }
  return result;
}
console.log(getPairs([22, 3, 5, 0, 2, 2], 5));
console.log(getPairs([-5, 33, 2, 2, 3, 5, 0, 10, 3], 5));
console.log(getPairs([5, 5, 5, 0, 0, 0, 5], 5));
console.log(getPairs([3, 3, 6, 0], 6));
