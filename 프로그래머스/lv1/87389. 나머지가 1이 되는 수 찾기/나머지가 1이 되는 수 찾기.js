function solution(n) {
    // 짝수는 2
    if ((n-1) % 2 === 0) return 2
    
    // 홀수는 나머지가 1이되는 가장 작은 소수
    const sosuArr = sosu(n-1)
    for(let x of sosuArr) {
        if ((n-1) % x === 0) return x
    }

}

function sosu(n) {
    let sosu = new Array(n+1).fill(true)
    
    // 2부터 자신의 배수를 제외(소수는 배수 x)
    for (let i = 2; i*i <= n; i++) {
        if (!sosu[i]) continue
        
        for (let j = 2; i * j <= n; j++) {
            sosu[i * j] = false
        }
    }
    
    const answer = []
    sosu.forEach((b, i) => {
        if (i > 2 && b) answer.push(i)
    })
    return answer
}