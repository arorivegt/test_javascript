"use strict";
function findSmallestInterval(numbers) {
    let min = -1;
    for (let i = 0, l = numbers.length; i < l; i++) {
        for (let j = i + 1, l = numbers.length; j < l; j++) {
            let different = Math.abs(numbers[i] - numbers[j]);
            if (different < min || min === -1)
                min = different;
        }
    }
    return min;
}
