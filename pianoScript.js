
let available_keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG',
    'KeyH', 'KeyJ', 'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'];

// Piano keys handler
document.addEventListener("keydown", function(event) {
    if (available_keys.includes(event.code)) {
        let audio = new Audio('res/'+ event.code.charAt(3) +'.mp3');
        audio.play().then(() => Node);
    }
    else {
        console.warn('Another key was pressed.');
    }
});

let keys = document.getElementsByTagName("kbd");
for (let i=0; i<keys.length; i++) {
    let key_name = keys[i].textContent;
    keys[i].addEventListener("click", function(){
        let audio = new Audio('res/'+ key_name +'.mp3');
        audio.play().then(() => Node);
    });
}