const pianoKeys = document.querySelectorAll(".piano-keys .key");

volumeSlider = document.querySelector(".volume-slider input");


keysCheckbox = document.querySelector(".keys-checkbox input");







//new Audio creates a HTML audio element.
let allKeys = [],
audio = new Audio("tunes/a.wav");//by default, audio src is "a" tune.

const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`; //passing the audio source based on key pressed.
    audio.play();//playing audio
    

    //adding the box shadow effect to the clicked key.
    const clickedKey = document.querySelector(`[data-key = "${key}"]`);
    clickedKey.classList.add('active');//adding active class to show that it's being played.

    setTimeout(()=> {
        clickedKey.classList.remove('active')  
    },150);//removing the class after 200ms(half second) from the clicked key element.

};

pianoKeys.forEach(key =>{
    //adding data-key value to the allkeys array
    allKeys.push(key.dataset.key)
    //calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
    // console.log(key.dataset.key);
});


const handleVolume = (e) => {
    audio.volume = e.target.value;//passing the range slider value as an audio volume.
}

const showHideKeys = () => {
    //toggling hide class from each key on the cleckbox click.
    pianoKeys.forEach(key => key.classList.toggle( 'hide'));
}

const pressedKey = (e) =>{
    console.log(e);//gettng all the properties of clicked key
    //if the pressed key is in the allKeys array, only call the playtune function.
    if (allKeys.includes(e.key)) playTune(e.key);//key is working but we dont know which key is clicked.So, we have to add the box shadow effect to the clicked key.
}
document.addEventListener("keydown", pressedKey);




volumeSlider.addEventListener("input", handleVolume);

keysCheckbox.addEventListener("click", showHideKeys);



