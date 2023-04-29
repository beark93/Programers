function solution(x) {
//     // 내풀이
//     let sum = 0
//     for (let copy = x; copy > 0 ; copy = Math.floor(copy / 10)) {
//         sum += copy % 10
//     }
    
//     return (x % sum) === 0
    
    // 다른사람 풀이 참고
    const sum = x.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b))
    
    return (x % sum) === 0
}