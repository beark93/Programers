function solution(n) {
//     // 내풀이
//     const arr = []
    
//     while (n > 0) {
//         const x = n%10
//         arr.push(x)
//         n = (n - x) / 10
//     }
//     return parseInt(arr.sort((a, b) => b - a).join(''))
    
    // 다른사람 풀이 참고
    return parseInt(n.toString().match(/\d/g).sort((a, b) => b - a).join(''))
}