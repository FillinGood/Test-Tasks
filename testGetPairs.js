function getPairs(arr, sum) {
    const a = [...arr];
    const result = [];
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
function resultsMatched(arr, sum, expectedArr) {
    const res = getPairs(arr, sum);
    if (res.length !== expectedArr.length)
        return false;
    for (const p of expectedArr) {
        if (!res.find((e) => (e[0] === p[0] && e[1] === p[1]) || (e[1] === p[0] && e[0] === p[1])))
            return false;
    }
    return true;
}
console.log(resultsMatched([-5, 33, 2, 2, 3, 5, 0, 10, 3], 5, [
    [-5, 10],
    [2, 3],
    [5, 0],
    [3, 2],
]));
