function solution(num) {
    let answer = 0

    while (answer <= 500 && num !== 1) {
        answer++
        if (num % 2 === 0) {
            num /= 2
        } else {
            num = (num * 3) + 1
        }
    }

    return (answer <= 500) ? answer : -1;
}