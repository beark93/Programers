function solution(strings, n) {
    return strings.sort((a, b) => {
        const x = a.charAt(n).charCodeAt() - b.charAt(n).charCodeAt()
        if (x === 0) {
            return (a < b) ? -1 : 1
        }
        return x
    })
}