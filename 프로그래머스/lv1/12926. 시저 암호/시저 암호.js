function solution(s, n) {
//     // 내풀이
//     // 문자열 하나씩 읽으면서 변환
//     return s.split('').map((a) => {
//         if (a === ' ') {
//             return a
//         }

//         let ascii = a.charCodeAt() + n

//         if (ascii > 'z'.charCodeAt() || (ascii - n < 'a'.charCodeAt() && ascii > 'Z'.charCodeAt())) {
//             ascii = ascii - 26
//         }

//         return String.fromCharCode(ascii)
//     }).join('')
    
    // 다른사람 풀이 참고
    const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"

    return s.split('').map(c => c === ' ' ? ' ' : alphabet.charAt(alphabet.indexOf(c) + n)).join('')
}