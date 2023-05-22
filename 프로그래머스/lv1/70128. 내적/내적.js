function solution(a, b) {
    return a.map((n, i) => n * b[i]).reduce((a, b) => a + b)
}