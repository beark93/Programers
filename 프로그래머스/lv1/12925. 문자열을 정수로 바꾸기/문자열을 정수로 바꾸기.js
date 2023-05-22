function solution(s) {
    // 내풀이
    // 문자열 하나하나 확인해서 정수로 변환
    const answer = []
    let sign = 1
    s.split('').forEach((c) => {
        if (c === '+') sign = 1
        else if (c === '-') sign = -1
        else answer.push(c.charCodeAt() - 48)
    })
    return answer.join('') * sign
    
    // // 다른사람 풀이 참고
    // // JS에서 제공하는 함수 사용
    // return parseInt(s)
}