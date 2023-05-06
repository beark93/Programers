function solution (dartResult) {
    // 내풀이
    // 라운드별 배열로 담는다.
    const roundArr = dartResult.match(/\d+[^0-9]+/g)
    const pointArr = [0, 0, 0]

    roundArr.forEach((round, index) => {
        // 라운드별 포인트 / 보너스 / 옵션으로 구분
        const point = parseInt(round.match(/\d+/g)[0])
        let pow = round.match(/[A-Z]/g)[0]
        let option = (round.match(/[^0-9^A-Z]/g) || [])[0]

        // 포인트 / 옵션 관련 처리
        pow = pow === 'T' ? 3 : (pow === 'D' ? 2 : 1)
        option = option === '*' ? 2 : (option === '#' ? -1 : 1)

        // 점수 계산
        pointArr[index] += Math.pow(point, pow)
        pointArr[index] *= option
        if (option === 2 && index !== 0) {
            pointArr[index-1] *= option
        }
    })

    return pointArr.reduce((a,b) => a+b)
}