function bouncer(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}