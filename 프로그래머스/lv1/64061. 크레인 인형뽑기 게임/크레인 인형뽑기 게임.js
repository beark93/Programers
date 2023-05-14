function solution(board, moves) {
  // 각 칸의 높이가 담긴 배열
  const tops = board.reduce((acc, col, floor) => {
    col.forEach((doll, idx) => {
      if (doll !== 0) {
        if (acc[idx] === board.length) acc[idx] = floor
      }
    })
    return acc
  }, new Array(board[0].length).fill(board.length))

  // basket 버퍼에 크레인 움직임에 따른 인형을 쌓는다.
  // 같은 인형이 겹치면 제거하면서 answer + 1
  const basket = []
  const answer = moves.reduce((acc, move) => {
    const top = tops[move - 1]
    if (top !== board.length) {
      const doll = board[top][move - 1]
      if (doll === basket[basket.length - 1]) {
        basket.pop()
        acc += 2
      } else {
        basket.push(doll)
      }
      tops[move - 1]++
    }
    return acc
  }, 0)

  return answer
}