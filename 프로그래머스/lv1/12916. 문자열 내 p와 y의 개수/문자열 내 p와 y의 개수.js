function solution(s){
    const p = s.match(/p|P/g)||''
    const y = s.match(/y|Y/g)||''
    
    return p.length === y.length
}