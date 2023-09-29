function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    let isUp, isDown, isString;
    if (string === string.toLowerCase()) {
        isDown = 'I can\'t hear you!'
        return `${isDown}`
    } else if (string === string.toUpperCase()) {
        isUp = 'YES INDEED!'   
        return `${isUp}`
    } else if (string === "Let's have dinner together!") {
        isString = 'I would love to!'   
        return `${isString}`
    }
}
    

