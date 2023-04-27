function solution(s) {
    return s.split(' ').map((word) => {
        return word.split('').map((s, index) => {
            return (index % 2 === 0) ? s.toUpperCase() : s.toLowerCase()
        }).join('')
    }).join(' ')
}