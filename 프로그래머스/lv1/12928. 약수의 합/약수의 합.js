function solution(n) {
    const x = Math.floor(Math.sqrt(n))
    
    let answer = 0
    for (let i=0; i <= x; i++) {
        if ((n % i) === 0) {
            if (i === n/i) answer += i
            else answer += i + n/i
        }
    }

    return answer
}