"use strict";
function computeCheckDigit(identificationNumber) {
    let even = 0;
    let odd = 0;
    identificationNumber.split("").forEach((v, i) => {
        even += i % 2 === 0 ? +v : 0;
        odd += i % 2 === 1 ? +v : 0;
    });
    let step2 = even * 3;
    let step3 = step2 + odd;
    let step4 = step3.toString()[step3.toString().length - 1];
    let step5 = +step4 != 0 ? 10 - (+step4) : 0;
    return step5;
}
console.log(computeCheckDigit("39847"));
