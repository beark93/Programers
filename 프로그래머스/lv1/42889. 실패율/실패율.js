function solution(N, stages) {
  // 스테이지별 실패횟수가 담긴 배열
  const failCount = stages.reduce((acc, item) => {
    acc[item - 1]++
    return acc
  }, new Array(N).fill(0))

  const failRate = []
  let userCount = stages.length
  for (let i = 0; i < N; i++) {
    // 실패율 = 해당 스테이지 실패횟수 / 현재까지 생존 한 user 수
    const rate = failCount[i] / userCount
    userCount -= failCount[i]
    failRate.push({stage: i + 1, rate: rate})
  }

  return failRate.sort((a, b) => b.rate - a.rate).map(item => item.stage)
}