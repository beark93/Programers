function solution(n)
{
    /*
    // 내 풀이
    const arr = []

    while (n > 0) {
        const x = n % 10
        arr.push(x)
        n = (n - x) / 10
    }

    return arr.reduce((a, b) => a + b)
    */
    
    // 다른 풀이 참고
    return n.toString().split('').map(s => parseInt(s)).reduce((a, b) => a + b)
}