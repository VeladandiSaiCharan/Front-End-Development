function titleCase(str) {
    const lowerStr = str.toLowerCase();
    const words = lowerStr.split(" ");
    const result = [];

    for (let i = 0; i < words.length; i++) {
        const word =
            words[i][0].toUpperCase() + words[i].slice(1);

        result.push(word);
    }

    return result.join(" ");
}