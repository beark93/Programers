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
    // 알파벳을 순서대로 2번 반복해서 나열한 문자열을 통해 z 이상일 때 다시 a 로 돌아가도록 구현
    const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"

    return s.split('').map(c => c === ' ' ? ' ' : alphabet.charAt(alphabet.indexOf(c) + n)).join('')
}