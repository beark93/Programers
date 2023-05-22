function solution(n) {
  let result = 0
  const tempArr = ternaryArr(n)
  
  // 3진법 -> 10진법
  let y = 1
  tempArr.map(x => {
    result += x * y
    y *= 3
  })

  return result
}

// 3진법 뒤집기
function ternaryArr (n) {
  let s = ''

  while(n >= 3) {
      s += n%3
      n = Math.floor(n/3)
  }
  s += n

  return s.split('').reverse()
}