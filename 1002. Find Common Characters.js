var commonChars = function(words) {
    const result = {};
    const final = [];

    for (let i = 0; i < words.length; i++) {
        const split = words[i].split('');
        result[i] = split;
    };

    result[0].map((item) => {
        let count = 0;
        for (let i = 1; i < Object.keys(result).length; i++) {
            if (result[i].includes(item)) {
                count++;
                const index = result[i].indexOf(item);
                result[i].splice(index, 1);
            };
        };

        if (count === Object.keys(result).length - 1) {
            final.push(item);
        }
    });

    return final;
};

const words = ["cool","lock","cook"];

const result = commonChars(words);

console.log(result);