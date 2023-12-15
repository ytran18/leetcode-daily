/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let a = s.length;
    let brackets = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    };

    let s2 = [];
    for (let i = 0; i < a; i++)
    {
        if(brackets[s[i]]) {
            s2.push(brackets[s[i]]);
        } else if(s[i] != s2.pop()) {
            return false;
        };
    };

    return !s2.length;
};

const s = "()[]{}";
// ({[]})

const result = isValid(s);

console.log(result);