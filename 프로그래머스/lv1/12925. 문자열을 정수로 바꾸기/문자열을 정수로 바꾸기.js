function solution(s) {
    const answer = []
    let sign = 1
    s.split('').forEach((c) => {
        if (c === '+') sign = 1
        else if (c === '-') sign = -1
        else answer.push(c.charCodeAt() - 48)
    })
    return answer.join('') * sign
    
    // return parseInt(s)
}