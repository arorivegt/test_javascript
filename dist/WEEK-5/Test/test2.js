"use strict";
function filterDuplicates(data) {
    return data.filter(function (item, pos) {
        console.log(item, pos, data.indexOf(item));
        return data.indexOf(item);
    });
}
console.log(filterDuplicates([7, 6, 4, 3, 3, 4, 9]));
