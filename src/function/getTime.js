export function getTimeSong(secondsNow) {
    let minutes = Math.floor(secondsNow / 60);
    let seconds = Math.floor(secondsNow - minutes * 60);

    if (minutes < 10) minutes = `0` + minutes;
    if (seconds < 10) seconds = `0` + seconds;

    return (`${minutes}:${seconds}`)
}