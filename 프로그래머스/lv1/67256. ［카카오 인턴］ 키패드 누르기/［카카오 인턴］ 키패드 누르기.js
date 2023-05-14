function solution(numbers, hand) {
  const center = [2,5,8,0]

  // 현재 손가락에서 누를 번호까지의 거리
  const distance = (a, b) => {
    let d = 0

    if (center.includes(b)) {
      d = Math.abs(center.indexOf(b) - center.indexOf(a))
    } else {
      d = Math.abs(parseInt((b - 1) / 3) - center.indexOf(a)) + 1
    }
    
    return d
  }

  // 눌러야 할 번호가 center에 있을 경우만 경우의 수를 계산
  const curr = [10, 12]
  const answer = numbers.reduce((acc, num) => {
    let check = ''
    if (center.includes(num)) {
      const left = distance(num, curr[0])
      const right = distance(num, curr[1])
  
      if (left < right) {
        check = 'left'
      } else if (right < left) {
        check = 'right'
      } else {
        check = hand
      }
    } else {
      if ((num - 1) % 3 === 0) {
        check = 'left'
      } else {
        check = 'right'
      }
    }

    if (check === 'left') {
      curr[0] = num
      acc += 'L'
    } else {
      curr[1] = num
      acc += 'R'
    }

    return acc
  }, '')

  return answer
}