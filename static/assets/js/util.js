function sleep(delay) {
    return new Promise(resolve => { setTimeout(resolve, delay); });
}

function randInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}