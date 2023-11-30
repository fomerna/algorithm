/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/176963?language=javascript
 */

function solution(name, yearning, photo) {
    let humanMapNameKey = new Map();
    let tempPhoto;
    let tempScore;
    let result = [];

    name.forEach((x, i) => {
        humanMapNameKey.set(name[i], yearning[i]);
    })

    for (let i = 0; i < photo.length; i++) {
        tempPhoto = photo[i];
        tempScore = 0;
        tempPhoto.forEach((x, i) => {
            if (humanMapNameKey.has(x)) tempScore += humanMapNameKey.get(x);
        });
        result.push(tempScore);
    }
    return result;
}


const NAME = ["may", "kein", "kain", "radi"];
const YEARNING = [5, 10, 1, 3];
const PHOTO = [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

solution(NAME, YEARNING, PHOTO);
