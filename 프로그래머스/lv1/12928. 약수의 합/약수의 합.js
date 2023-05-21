function solution(n) {
    let answer = 0
    
    // 약수는 짝을 이루기 때문에 제곱근 까지 돌면서 더해준다.
    const x = Math.floor(Math.sqrt(n))
    for (let i=0; i <= x; i++) {
        if ((n % i) === 0) {
            // 제곱근이라면 i만 더하고 제곱근이 아니라면 짝을 모두 더해준다.
            if (i === n/i) answer += i
            else answer += i + n/i
        }
    }

    return answer
}