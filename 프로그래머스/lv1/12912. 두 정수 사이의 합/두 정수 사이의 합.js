function solution(a, b) {
    // b < a 인 두 정수 a,b 사이 모든 정수의 합 -> (b*(b+1) - a(a+1)) / 2
    const cal = (a, b) => {
        return ((Math.pow(b,2) + b) - (Math.pow(a,2) + a)) / 2 
    }
    
    if (a > b) {
        return cal(b-1, a)
    } else if (b > a) {
        return cal(a-1, b)
    } else {
        return a
    }
}