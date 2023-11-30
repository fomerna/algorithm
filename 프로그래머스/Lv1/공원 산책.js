/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/172928
 * @todo 배열 값 비교 시 JSON.stringify 활용
 */

function solution(park, routes) {
    const MAX_X = park[0].length - 1;
    const MAX_Y = park.length - 1;
    let cordiMapAxis = new Map();
    let cordiMapCount = new Map();
    let x = 0;
    let y = 0;
    let barrier = [];
    let result = [];

    // 시작위치 설정
    park.forEach((item, i) => {
        if (item.includes('S')) {
            y = i;
            x = item.indexOf('S');
        }

        if (item.includes('X')) {
            item.split('').forEach((char, j) => {
                if (char === 'X') {
                    barrier.push([i, j]);
                }
            })
        }
    })

    routes.forEach((x, i) => {
        let axis = x.split('')[0]
        let count = Number(x.split('')[2]);
        cordiMapAxis.set(i, axis === 'W' || axis === 'E' ? 'x' : 'y');
        cordiMapCount.set(i, axis === 'W' || axis === 'N' ? -count : count)
    })

    for (let i = 0; i < routes.length; i++) {
        if (!isNotValidate(cordiMapAxis.get(i), cordiMapCount.get(i))) {
            for (let j = 0; j < Math.abs(cordiMapCount.get(i)); j++) {
                if (cordiMapAxis.get(i) === 'x') {
                    if (cordiMapCount.get(i) > 0) {
                        x++;
                    } else {
                        x--;
                    }
                    if (isBlock(y, x)) {
                        if (cordiMapCount.get(i) > 0) {
                            x -= j + 1;
                        } else {
                            x += j + 1;
                        }
                        break;
                    }
                } else {
                    if (cordiMapCount.get(i) > 0) {
                        y++;
                    } else {
                        y--;
                    }
                    if (isBlock(y, x)) {
                        if (cordiMapCount.get(i) > 0) {
                            y -= j + 1;
                        } else {
                            y += j + 1;
                        }
                        break;
                    }
                }
            }
        }
    }


    function isNotValidate(way, value) {
        if (way === 'x') {
            return value + x > MAX_X || value + x < 0;
        } else return value + y > MAX_Y || value + y < 0;
    }

    function isBlock(valueY, valueX) {
        let tempCordi = [valueY, valueX];
        let flag = false;
        for (let i = 0; i < barrier.length; i++) {
            if (JSON.stringify(barrier[i]) === JSON.stringify(tempCordi)) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    result.push(y);
    result.push(x);

    return result;
}

const PARK = ["OSO", "OOO", "OXO", "OOO"];
const ROUTES = ["E 2", "S 3", "W 1"];
// [0, 0]
solution(PARK, ROUTES);
