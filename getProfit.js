function getProfit(arr) {
    const result = [0, 0, 0];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const diff = arr[j] - arr[i];
            if (result[0] < diff) {
                result[0] = diff;
                result[1] = i;
                result[2] = j;
            }
        }
    }
    if (result[0] === 0)
        return [];
    return [result[1], result[2]];
}
console.log(getProfit([13, 6, 3, 4, 10, 2, 3]));
console.log(getProfit([6, 5, 4, 3]));
console.log(getProfit([3, 3, 3, 3]));
