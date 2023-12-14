/**
 * @description
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

 * @example
 * @param {number} count   첫 줄에 자연수 N이 주어진다.(1<=N<=50)
 * @param {number[][]} score 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
 * @return {number} 최대합을 출력합니다.
 * @todo sort 오답 확인
 */


function solution(count, score) {

    let maxSum = 0;
    let rowSum = 0;
    let colSum = 0;
    let crossSum1 = 0;
    let crossSum2 = 0;
    const CROSS_COUNT = 2;

    console.log('---------------------');

    for (let i = 0; i < count; i++) {
        rowSum = score[i].reduce((acc, value)=>{
            return acc+ value;
        })
        console.log('rowSum : ', maxSum);
        console.log('---------------------');
        if (rowSum > maxSum) {
            maxSum = rowSum;
            console.log('maxSum : ', maxSum);
        }
    }
    console.log('======================');

    for (let i = 0; i < count; i++) {
        colSum = 0;

        for (let j = 0; j < score.length; j++) {
            colSum += score[i][i];
        }
        console.log('colSum : ', colSum);
        console.log('---------------------');

        if (colSum > maxSum) {
            maxSum = colSum;
            console.log('maxSum : ', maxSum);
        }
    }
    console.log('======================');
    for (let i = 0; i < CROSS_COUNT; i++) {
        crossSum1 = 0;

        for (let j = 0; j < score.length; j++) {
            crossSum1 += score[j][j];
        }
        console.log('crossSum1 : ', crossSum1);
        if (crossSum1 > maxSum) {
            maxSum = crossSum1;
            console.log('maxSum : ', maxSum);
        }
        for (let j = score.length - 1; j >= 0; j--) {
            crossSum2 += score[j][j];
        }
        console.log('crossSum2 : ', crossSum2);
        if (crossSum2 > maxSum) {
            maxSum = crossSum1;
            console.log('maxSum : ', maxSum);
        }
    }
    console.log('======================');
    return maxSum;
}

console.log(solution(5,[
    [10,13,10,12,15],
    [12,39,30,23,11],
    [11,25,50,53,15],
    [19,27,29,37,27],
    [19,13,30,13,19]]));


function solution2(count, score) {

    let answer = Number.MIN_SAFE_INTEGER;
    let n = score.length;
    let sum1  = 0;
    let sum2= 0;

    for (let i = 0; i < n; i++) {
        sum1 = 0;
        sum2 = 0;

        for (let j = 0; j < n; j++) {
            sum1+=score[i][j];
            sum2+=score[j][i];
        }
        answer = Math.max(answer, sum1, sum2);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum1+=score[i][i];
            sum2+=score[i][n-i-1];
        }
    }
    return answer;
}
