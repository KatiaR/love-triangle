/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    if (preferences.length < 2) return 0;
    let returnCountTriangle = 0;
    let newArr = preferences.map((elem, index) => ({key: index + 1, value: elem, added: false}))
    newArr.forEach((e,i,arr) => {
        if (e.added) return;
        let firstLink = e.value - 1;
        if (firstLink < 0) return;
        let secondLink = arr[firstLink].value - 1;
        if (secondLink < 0) return;
        let thirdLink = arr[secondLink].value - 1;
        if (thirdLink < 0) return;
        let isDiff = firstLink !== secondLink && firstLink !== thirdLink && thirdLink !== secondLink;
        if (thirdLink === e.key - 1 && isDiff) {
            arr[i].added = true;
            arr[firstLink].added = true;
            arr[secondLink].added = true;
            returnCountTriangle++
        }
    })
    return returnCountTriangle
};
