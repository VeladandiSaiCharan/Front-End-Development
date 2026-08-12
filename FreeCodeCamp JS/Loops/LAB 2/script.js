function findLongestWordLength(sentence) {
    let longest = 0;
    const words = sentence.split(" ");
    for (const word of words) {
        if (word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}