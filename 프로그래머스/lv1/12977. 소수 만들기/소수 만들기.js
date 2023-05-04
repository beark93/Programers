function solution(nums) {

    // 가능한 조합의 배열
    const combination = (arr, select) => {
        if (select === 1) return arr.map(item => [item])

        let returnArr = []
        arr.forEach((a, i) => {
            const tempArr = combination(arr.filter((b, j) => j > i), select - 1).map(item => [a, ...item])
            returnArr = [...returnArr, ...tempArr]
        })

        return returnArr
    }

    // max까지의 소수의 배열
    const sosu = (max) => {
        const numbers = []
        for(let i=0; i<=max; i++) numbers.push(true)

        for(let i=2; i <= Math.sqrt(max); i++) {
            for (let j=2; i*j<=max; j++) numbers[i * j] = false
        }

        return numbers.map((n, i) => n ? i : -1).filter(n => n > 1)
    }

    // 가장 큰 3개의 수의 합까지의 모든 소수
    nums.sort((a, b) => b - a)
    const max = nums[0] + nums[1] + nums[2]
    const arrSosu = sosu(max)

    // 소수 카운팅
    let count = 0
    const arrComb = combination(nums, 3)
    arrComb.forEach(item => {
        const sum = item.reduce((a,b) => a + b)
        if (arrSosu.includes(sum)) count++
    })

    return count
}