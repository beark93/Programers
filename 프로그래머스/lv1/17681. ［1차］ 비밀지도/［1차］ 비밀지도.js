function solution(n, arr1, arr2) {
    return arr1.map((x, i) => addZero((x | arr2[i]).toString(2), n).replace(/0/g, ' ').replace(/1/g, '#'))
}

function addZero(s, n) {
    return '0'.repeat(n - s.length) + s
}