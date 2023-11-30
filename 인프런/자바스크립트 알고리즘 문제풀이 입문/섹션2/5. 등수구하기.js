/**
 * @description
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

 * @example
 * @param {number} count   N(3<=N<=1000)이 입력
 * @param {number[]} score 국어점수를 의미하는 N개의 정수가 입력된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
 * 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
 * @return {number[]} 입력된 순서대로 등수를 출력한다.
 * @todo sort 메서드 수행 시 원 배열이 바뀌어 깊은복사 처리
 */


function solution(count, score) {

    let rank = 0;
    let rankStack = 0;
    let prev = 0;
    let newScore = [...score];
    let totalRank = [];
    let sortedScore = score.sort((x,y)=>y-x);
    let rankBoard = [];

    for (let i = 0; i < count; i++) {
        if (i === 0) {
            prev = sortedScore[0];
            rank = 1;
        } else {
            if (sortedScore[i] < prev) {
                rank++;
                rank+=rankStack;
                rankStack = 0;
            } else {
                rankStack++;
            }
            prev = sortedScore[i];
        }
      rankBoard.push({
          scoreRank : rank, score : sortedScore[i]
      })
    }

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            if (newScore[i] === rankBoard[j].score) {
                totalRank.push(rankBoard[j].scoreRank);
                break;
            }
        }
    }

    return totalRank;

}

console.log(solution(5, [87,89,92,100,76]));
