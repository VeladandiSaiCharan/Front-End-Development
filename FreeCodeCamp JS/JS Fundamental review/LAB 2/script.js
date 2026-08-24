function largestOfAll(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const currentArray = arr[i];
        let high = currentArray[0];

        for (let j = 0; j < currentArray.length; j++) {
            if (currentArray[j] > high) {
                high = currentArray[j];
            }
        }
        result.push(high);
    }
    return result;
}
