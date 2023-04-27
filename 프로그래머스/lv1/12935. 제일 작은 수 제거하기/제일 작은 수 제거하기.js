function solution(arr) {
    if (arr.length === 1) {
        return [-1]
    }
    const sortArr = [...arr].sort((a,b) => b - a)
    const returnArr = arr.filter(a => a !== sortArr[arr.length - 1])
    return returnArr
}