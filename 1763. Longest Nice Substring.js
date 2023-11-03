/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    const length = s.length;
    if (length < 2) return "";
    let obj = {};

    for (const i of s) {
        obj[i] = i;
    };

    for (let i = 0; i < length; i++) {
        const value = s[i];
        
        if (obj[value.toUpperCase()] && obj[value.toLowerCase()]) continue;

        const before = longestNiceSubstring(s.substring(0,i));
        const after = longestNiceSubstring(s.substring(i + 1));

        return before.length >= after.length ? before : after;
    };
    return s;
};