var toGoatLatin = function(sentence) {
    const arr = sentence.split(' ');
    let a = 'a';

    for (let i = 0; i < arr.length; i++) {
        let split = arr[i].split('');
        const first = split[0];
        const firtsLetter = split[0].toLowerCase();

        if (firtsLetter === 'a' || firtsLetter === 'e' || firtsLetter === 'i' || firtsLetter === 'o' || firtsLetter === 'u') {
            arr[i] = `${arr[i]}ma${a}`;
        } else {
            split.shift();
            arr[i] = `${split.join('')}${first}ma${a}`;
        }
        a += 'a';
    };

    return arr.join(' ');
};

const sentence = "I speak Goat Latin";

const result = toGoatLatin(sentence);

console.log(result);