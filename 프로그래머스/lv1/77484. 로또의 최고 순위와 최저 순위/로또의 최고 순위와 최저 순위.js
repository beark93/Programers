function solution(lottos, win_nums) {
  // 0과 그 외 숫자 구분
  const [check, zero] = lottos.reduce((acc, num) => {
    if (num === 0) acc[1]++
    if (win_nums.includes(num)) acc[0]++
    return acc
  }, [0, 0])
  
  // 순위 계산 함수
  const prize = (count) => {
    return (count < 2) ? 6 : 7 - count
  }

  // 0이 모두 당첨일 경우와 미당첨일 경우의 순위를 리턴
  return [prize(check+zero), prize(check)]
}