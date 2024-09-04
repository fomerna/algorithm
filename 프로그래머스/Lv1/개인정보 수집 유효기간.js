/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/150370?language=javascript
 * @todo 1. 날짜 비교 시 단순화 / 2. 문자 -> 숫자 변경 고려 / 3. replaceAll 활용
 */

function solution(today, terms, privacies) {
    var answer = [];

    const [ty, tm, td] = today.split('.');
    const convertedToday = +ty * 12 * 30 + +tm * 30 + +td;

    let privacy = {
        date: '',
        month: 0
    }

    let termObj = {};

    // term key : value 객체로 변경
    for (let i = 0; i < terms.length; i++) {
        termObj[terms[i].split(' ')[0]] = terms[i].split(' ')[1] * 30;
    }

    for (let i = 0; i < privacies.length; i++) {
        // 개별 privacy 객체
        privacy.date = privacies[i].split(' ')[0];
        privacy.month = termObj[privacies[i].split(' ')[1]];
        console.log(privacy);

        let [vy, vm, vd] = privacy.date.split('.');
        let convertedValidDay = +vy * 12 * 30 + +vm * 30 + +vd;

        if (convertedValidDay + privacy.month <= convertedToday) answer.push(i+1);

    }
    return answer;
}
