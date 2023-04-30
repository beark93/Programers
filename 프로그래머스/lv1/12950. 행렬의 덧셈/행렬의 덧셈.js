function solution(arr1, arr2) {
//     // 내풀이
//     var answer = []

//     arr1.forEach((a, i) => {
//         var tempArr = []
//         a.forEach((b, j) => {
//             tempArr.push(b + arr2[i][j])
//         })
//         answer.push(tempArr)
//     })

//     return answer

    // 다른사람 풀이 참고
    return arr1.map((a,i) => a.map((b,j) => b + arr2[i][j]))
}