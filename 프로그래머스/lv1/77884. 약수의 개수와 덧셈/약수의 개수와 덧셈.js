function solution(left, right) {
  // 내풀이
  // 제곱근이 정수라면 약수의 갯수가 홀수 그 외에는 짝수
  let result = 0
  for (let i=left; i<=right; i++) {
    const sqrt = Math.sqrt(i)
    if (sqrt === Math.floor(sqrt)) {
      result -= i
    } else {
      result += i
    }
  }
  return result
}