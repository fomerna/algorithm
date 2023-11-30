/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/178871
 * @todo 1. Map 객체 활용 및 관련 API 학습 / 2. Array의 indexOf, splice 등 시간복잡도 고려
 */

function solution(players, callings) {
    let playerMapNameKey = new Map();
    let playerMapRankKey = new Map();
    let losePlayer = '';
    let rank = 0;
    let result;

    players.forEach((player, idx) => {
        playerMapNameKey.set(player, idx);
        playerMapRankKey.set(idx, player);
    });


    for (let i = 0; i < callings.length; i++) {
        losePlayer = playerMapRankKey.get(playerMapNameKey.get(callings[i]) - 1);
        rank = playerMapNameKey.get(callings[i]);

        playerMapNameKey.set(callings[i], rank - 1);
        playerMapNameKey.set(losePlayer, rank);


        playerMapRankKey.set(rank - 1, callings[i]);
        playerMapRankKey.set(rank, losePlayer);
    }

    result = Array.from(playerMapRankKey.values());

    return result;
}
