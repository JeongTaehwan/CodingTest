function solution(matrix) {
  let answer = [];
  let a;
  let b;

  for (let i = 0; i >= 3; i++) {
    for (let j = 0; j >= 3; j++) {
      matrix = a[i][j] * b[i][j] + a[i][j + 1] * b[i][j + 1];

      answer.push(matrix);
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
