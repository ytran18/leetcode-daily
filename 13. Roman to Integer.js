/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    if (s.length === 1) return symbol[s[0]];

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (symbol[s[i]] < symbol[s[i + 1]]) {
            result -= symbol[s[i]];
        } else {
            result += symbol[s[i]];
        }
    };

    return result;
};

const s = "IV";

const result = romanToInt(s);

console.log(result);