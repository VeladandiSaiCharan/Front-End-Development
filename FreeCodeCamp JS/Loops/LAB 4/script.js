function mutation(array) {
    const str1 = array[0].toLowerCase();
    const str2 = array[1].toLowerCase();

    for (let i = 0; i < str2.length; i++) {
        if (!str1.includes(str2[i])) {
            return false;
        }
    }
    return true;
}