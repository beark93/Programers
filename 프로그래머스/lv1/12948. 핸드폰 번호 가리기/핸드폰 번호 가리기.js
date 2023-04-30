function solution(phone_number) {
    // 내풀이
    // return phone_number.split('').reverse().map((s, i) => (i < 4) ? s : '*').reverse().join('')
    
    // 다른사람 풀이 참고
    return phone_number.replace(/\d(?=\d{4})/g, '*')
}