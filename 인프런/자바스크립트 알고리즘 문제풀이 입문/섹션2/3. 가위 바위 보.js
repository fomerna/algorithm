/**
 * @description
 * A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
 * B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
 * 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
 * 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요

 * @example
 * @param {number} count   첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
 * @param {number[]} arrA   두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
 * @param {number[]} arrB   세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다
 * @return {string[]} 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
 */


function solution(count, arrA, arrB) {

    let answer = [];
    let result = '';

    for (let i = 0; i < count; i++) {
        if ((arrA[i] === 3 && arrB[i] === 1) || (arrA[i] === 1 && arrB[i] === 3)) {
            result = arrA[i] > arrB[i] ? 'B' : arrA[i] < arrB[i] ? 'A' : 'D';
        } else {
            result = arrA[i] > arrB[i] ? 'A' : arrA[i] < arrB[i] ? 'B' : 'D';
        }
        answer.push(result);
    }

    return answer;
}

console.log(solution(5, [2,3,3,1,3], [1,1,2,2,3]));
