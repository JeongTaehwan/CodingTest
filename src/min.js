// 세 수 중 최소값

function solution(a, b, c) {
    let min;

    if (a > b) min = b;
    else min = a;

    if (c < min) min = c;

    return min;
};

console.log(solution(6, 5, 11));