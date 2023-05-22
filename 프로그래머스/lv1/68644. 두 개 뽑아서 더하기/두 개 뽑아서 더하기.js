function solution(numbers) {
    // set을 사용하여 중복 제거
    const result = new Set()
    
    numbers.forEach((x, i) => {
      numbers.filter((y, j) => j > i).forEach((y, j) => {
        result.add(x+y)
      })
    })

    return [...result].sort((a, b) => a - b)
}