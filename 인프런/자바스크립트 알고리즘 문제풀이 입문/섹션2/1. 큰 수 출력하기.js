/**
* @description
* N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 문제이다. (첫 번째 수는 무조건 출력한다.))

* @example
* @param {number[]} arr  첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
* @return {number[]} 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
 */


function solution(arr) {

    let answer = [];
    answer.push(arr[0]);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            answer.push(arr[i + 1]);
        }
    }

    return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
