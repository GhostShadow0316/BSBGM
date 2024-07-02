// script.js
const last_update = "20240702";

// [ function ]

const delay = (ms=0) => new Promise(res => setTimeout(res, ms));

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

// [ init ]

const [wHeight, wWidth] = [document.documentElement.clientHeight, document.documentElement.clientWidth];
const iLoaded = new CustomEvent("iLoaded");

const bg_elem    = document.getElementById("bg");
const bgm_elem   = document.getElementById("bgm");
const bgm_source = document.getElementById("bgm-source");

const btn_div    = document.getElementById("btns");
const prev_btn   = document.getElementById("prev");
const play_btn   = document.getElementById("play");
const next_btn   = document.getElementById("next");
const vol_btn    = document.getElementById("vol");
// const good_btn   = document.getElementById("good");
// const bad_btn    = document.getElementById("bad");

let volume;
let [bg_i, bgm_i] = [0, 0];
bg_list  = shuffle(bg_list);
bgm_list = shuffle(bgm_list);

// [ function ]

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

const next = () => {
    bgm_i++;
    if (bgm_i == bgm_list.length) { bgm_i = 0; }

    bg_i++;
    if (bg_i == bg_list.length) { bg_i = 0; }

    change_bg();
    change_bgm();
}

const prev = () => {
    bgm_i--;
    if (bgm_i < 0) { bgm_i = bgm_list.length - 1; }

    bg_i--;
    if (bg_i < 0) { bg_i = bg_list.length - 1; }

    change_bg();
    change_bgm();
}

// [ events ]

bgm_elem.addEventListener("ended", () => {
    bgm_elem.currentTime = 0;
    next();
    bgm_elem.play();
});

// [ controls ]
play_btn.onclick = () => {
    if (bgm_elem.paused) {
        bgm_elem.play();
        play_btn.innerHTML = "&#x23F8;";
    } else {
        play_btn.innerHTML = "&#x23F5;";
        bgm_elem.pause();
    }
}

next_btn.onclick = next;
prev_btn.onclick = prev;
vol_btn.onchange = () => { bgm_elem.volume = vol_btn.value; }

// [ main ]

change_bg();
change_bgm();

// [ debug ]

console.log(`bg_list:  ${bg_list.length}`);
console.log(`bgm_list: ${bgm_list.length}`);
