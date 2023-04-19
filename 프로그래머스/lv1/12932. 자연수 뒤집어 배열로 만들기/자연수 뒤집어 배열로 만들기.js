function solution(n) {
    /*
    // 내풀이
    const answer = []
    
    while (n > 0) {
        const x = n % 10
        answer.push(x)
        n = (n - x) / 10
    }
    
    return answer
    */
    
    // 다른사람 풀이 참고
    return n.toString().split('').map(s => parseInt(s)).reverse()
}