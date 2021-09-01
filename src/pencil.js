function solution(n) {
    let answer = Math.ceil(n / 12); //ceil은 올림 floor는 내림 round는 반올림
    return answer;
}

console.log(solution(178));