function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        const current = str[i];
        const next = str[i + 1];

        if (next.charCodeAt(0) !== current.charCodeAt(0) + 1) {
            return String.fromCharCode(current.charCodeAt(0) + 1);
        }
    }
    return undefined;
}