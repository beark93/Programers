function solution(n, m) {
//     // 내풀이
//     if (n === m) {
//         return [n, m]
//     }

//     const sortArr = (n < m) ? [n, m] : [m, n]
//     let gcd = 1
//     let lcm = n * m

//     for (let i = 2; i <= sortArr[0]; i++) {
//         if (sortArr[0] % i === 0 && sortArr[1] % i === 0) {
//             gcd = i
//         }
//     }

//     lcm /= gcd

//     return [gcd, lcm]

    // 다른사람 풀이 참고
    // 최대공약수를 재귀함수로 풀이
    gcdFunc = (a, b) => {
        return a ? gcdFunc(b % a, a) : b
    }

    const gcd = gcdFunc(n, m)

    return [gcd, n * m / gcd]
}