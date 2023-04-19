function solution(n) {
    // // 내 풀이
    // for (let i = 1; i <= n/i; i++) {
    //     if (i === n/i) return (i+1) * (i+1)
    // }
    // return -1
    
    // 다른사람 풀이 참고
    const sqrt = Math.sqrt(n)
    if (sqrt === Math.floor(sqrt)) {
        return Math.pow(sqrt+1, 2)
    }
    return -1
}