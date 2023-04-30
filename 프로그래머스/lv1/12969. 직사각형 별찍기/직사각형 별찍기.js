process.stdin.setEncoding('utf8')
process.stdin.on('data', data => {
    const n = data.split(" ")
    const a = Number(n[0]), b = Number(n[1])

//     // 내풀이
//     let low = ""
//     for (let i = 0; i < a; i++) {
//         low += "*"
//     }

//     for (let i = 0; i < b; i++) {
//         console.log(low)
//     }
    
    // 다른사람 풀이 참고
    console.log(('*'.repeat(a) + '\n').repeat(b))
});