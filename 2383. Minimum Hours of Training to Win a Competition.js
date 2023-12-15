/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    const totalOpponentsEnergy = energy.reduce((a,b) => {return a+b});
    let hours = (totalOpponentsEnergy - initialEnergy) >= 0 ? (totalOpponentsEnergy - initialEnergy) + 1  : 0;
    let trainEx = 0;
    let start = true;

    while(start) {
        let count = 0;
        let experienceCount = initialExperience + trainEx;
        for (let i = 0; i < experience.length; i++) {
            if ((experienceCount) - experience[i] <= 0) {
                trainEx++;
                break;
            } else {
                experienceCount += experience[i];
                count++;
            }
        };

        if (count === experience.length) start = false;
    };

    return trainEx + hours;

};

const initialEnergy = 5;
const initialExperience = 3;
const energy = [1,4];
const experience = [2,5];

const result = minNumberOfHours(initialEnergy, initialExperience, energy, experience);

console.log(result);