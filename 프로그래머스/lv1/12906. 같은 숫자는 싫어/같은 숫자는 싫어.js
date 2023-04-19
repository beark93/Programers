function solution(arr)
{
    // // 내풀이
    // const answer = []
    // let temp = -1
    // arr.forEach(n => {
    //     if (temp !== n) {
    //         temp = n
    //         answer.push(n)
    //     }
    // })
    // return answer
    
    // 다른사람 풀이 참고
    return arr.filter((item, index) => item !== arr[index+1])
}