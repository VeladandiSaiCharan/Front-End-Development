function isPalindrome(word) {
    const lowerWord = word.toLowerCase();
    const reverseWord = lowerWord.split("").reverse().join("");

    if (lowerWord === reverseWord) {
        return true;
    } else {
        return false;
    }
}

function findPalindromeBreaks(words) {
    const breaks = [];
    for (let i = 0; i < words.length; i++) {
        if (!isPalindrome(words[i])) {
            breaks.push(i);
        }
    }
    return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
    if (phraseLength >= words.length) {
        return [];
    }

    const counts = {};
    const result = [];

    for (let i = 0; i <= words.length - phraseLength; i++) {
        const phrase = words.slice(i, i + phraseLength).join(" ");

        if (counts[phrase] === undefined) {
            counts[phrase] = 0;
        }

        counts[phrase]++;
    }

    for (let i = 0; i <= words.length - phraseLength; i++) {
        const phrase = words.slice(i, i + phraseLength).join(" ");

        if (counts[phrase] > 1) {
            result.push(i);
        }
    }
    return result;
}

function analyzeTexts(texts, phraseLength) {
    if (texts.length === 0) {
        return [];
    }
    const results = [];

    for (let i = 0; i < texts.length; i++) {
        const words = texts[i];

        const palindromeBreaks = findPalindromeBreaks(words);
        const repeatedPhrases = findRepeatedPhrases(words, phraseLength);

        results.push({
            palindromeBreaks,
            repeatedPhrases
        });
    }
    return results;
}