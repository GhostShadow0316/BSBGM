// script.js

// [ FUNCTIONS ]

const delay = (ms = 0) => new Promise(res => setTimeout(res, ms));

const random = (min = 1, max = 6) => {
    return Math.floor(Math.random() * (max - min)) + min
}

const shuffle = (array_) => {
    for (let j = array_.length - 1; j > 0; j--) {
        const i = Math.floor(Math.random() * (j + 1));
        [array_[j], array_[i]] = [array_[i], array_[j]];
    }
    return array_;
}

const between = (min, val, max) => { return Math.min(Math.max(val, min), max); }

const set = (key, value) => {
    localStorage.setItem(key, value);
    return value;
}

const get = (key, default_) => {
    value = localStorage.getItem(key);
    if (value == null) { value = set(key, default_); }
    return value;
}

//---//

const change_bg = () => {
    path = bg_list[bg_i];
    bg_elem.src = path;
}

const change_bgm = () => {
    const paused = (bgm_elem.paused);

    path = bgm_list[bgm_i];
    bgm_source.src = path;
    bgm_elem.load();

    if (!paused) { bgm_elem.play(); }
}

// [ INIT ]

const bg_elem    = document.getElementById("bg");
const bgm_elem   = document.getElementById("bgm");
const bgm_source = document.getElementById("bgm-source");

const btn_div    = document.getElementById("btns");
const prev_btn   = document.getElementById("prev");
const play_btn   = document.getElementById("play");
const next_btn   = document.getElementById("next");
const vol_bar    = document.getElementById("vol");
// const good_btn   = document.getElementById("good");
// const bad_btn    = document.getElementById("bad");

let [bg_i, bgm_i] = [0, 0];
bg_list  = shuffle(bg_list);
bgm_list = shuffle(bgm_list);

let config = {
    "dark": false,
};

let volume = get("volume", 1);
vol_bar.value = bgm_elem.volume = volume;

// [ EVENTS ]

bgm_elem.onended = () => {
    bgm_elem.currentTime = 0;
    next();
    bgm_elem.play();
};

bgm_elem.onplay  = () => { play_btn.innerHTML = "&#x23F8;"; }
bgm_elem.onpause = () => { play_btn.innerHTML = "&#x23F5;"; }

// [ CONTROLS ]

const play =
play_btn.onclick = () => {
    if (bgm_elem.paused) { bgm_elem.play(); }
    else { bgm_elem.pause(); }
}

const next =
next_btn.onclick = () => {
    bgm_i++;
    if (bgm_i == bgm_list.length) { bgm_i = 0; }

    bg_i++;
    if (bg_i == bg_list.length) { bg_i = 0; }

    change_bg();
    change_bgm();
}

const prev =
prev_btn.onclick = () => {
    bgm_i--;
    if (bgm_i < 0) { bgm_i = bgm_list.length - 1; }

    bg_i--;
    if (bg_i < 0) { bg_i = bg_list.length - 1; }

    change_bg();
    change_bgm();
}

const set_volume =
vol_bar.onchange = () => {
    volume = set("volume", vol_bar.value);
    bgm_elem.volume = volume;
}

vol_bar.onwheel = (e) => {
    const delta = Math.sign(e.deltaY) * -0.1;
    vol_bar.value = between(0, (bgm_elem.volume + delta), 1);
    set_volume();
};

const darkMode = () => {
    config["dark"] = !config["dark"];
    let dark = config["dark"] ? "var(--dark)" : "100%";

    bg_elem.style.filter = `brightness(${dark})`;
}

// [ KEYBOARD ]

const ka = () => {};
const keyMap = {
    "Space": play,
    "k": play,
    "j": prev,
    "l": next,
    "ArrowUp":   () => { vol_bar.value = +vol_bar.value + 0.1; },
    "ArrowDown": () => { vol_bar.value = +vol_bar.value - 0.1; },

    "d": darkMode,
}
document.onkeydown = (e) => { (keyMap[e.key] || keyMap[e.code] || ka)(); }

// [ MAIN ]

change_bg();
change_bgm();

// [ DEBUG ]

console.log(`bg_list:  ${bg_list .length}`);
console.log(`bgm_list: ${bgm_list.length}`);
