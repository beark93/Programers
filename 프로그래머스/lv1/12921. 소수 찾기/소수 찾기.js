function solution(n) {
//     // 내 풀이
//     const arr = new Array(n-1).fill(true)

//     for (let i = 2; i*i <= n; i++) {
//         if (!arr[i-2]) continue
        
//         for (let j = 2; j * i <= n; j++) {
//             arr[j*i-2] = false
//         }
//     }

//     return arr.filter(a => a).length

    // 다른사람 풀이 참고(Set 사용)
    const set = new Set()
    
    for (let i = 1; i <= n; i+=2) set.add(i)
    set.delete(1)
    set.add(2)
    
    for (let i = 3; i * i <= n; i+=2) {
        if (!set.has(i)) continue
        
        for (let j = 3; j * i <= n; j+=2) {
            if (set.has(j * i)) set.delete(j * i)
        }
    }
    
    return set.size
}