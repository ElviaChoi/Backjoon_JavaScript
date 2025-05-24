function solution(angle) {
    if (0 < parseInt(angle) && parseInt(angle) < 90) {
        return 1;
    } else if (parseInt(angle) === 90) {
        return 2;
    } else if (90 < parseInt(angle) && parseInt(angle) < 180) {
        return 3;
    } else if (parseInt(angle) === 180) {
        return 4;
    }
}