/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if (words.length !== s.length) return false;

    const str = s.split("");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === str[i]) count++;
    };

    if (count === words.length) return true;
    return false;
};