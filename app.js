// handle keyboard press
document.addEventListener('keydown', function (e) {
    let keyCodes = [90, 88, 67, 86, 66, 78, 69, 87, 81
    ];

    if (keyCodes.includes(e.keyCode)) {

        let audio = new Audio(`./sounds/sound-${e.keyCode}.wav`)
        audio.play();
    }
});


// handle button press 
const buttonPressed = (soundId) => {
    // console.log('soundId', soundId)
    let audio = new Audio(`./sounds/sound-${soundId}.wav`);
    audio.play();
}
