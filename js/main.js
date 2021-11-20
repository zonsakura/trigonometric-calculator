const cosbtn = document.getElementById("cosbtn");
const sinbtn = document.getElementById("sinbtn");
const tanbtn = document.getElementById("tanbtn");
const cotbtn = document.getElementById("cotbtn");
const textbox1 = document.getElementById("textbox1");
const textbox2 = document.getElementById("textbox2");
const toplabtn = document.getElementById("submit");
const label = document.getElementById("cevap");
const fonksiyonspan = document.getElementById("fonksiyonspan");
const logo = document.getElementById("logo");
const cevaptext = document.getElementById("cevaptext");

const sin0 = 0,
    sin90 = 1,
    sin180 = 0,
    sin270 = -1,
    sin360 = 0

const cos0 = 1,
    cos90 = 0,
    cos180 = -1,
    cos270 = 0,
    cos360 = 1

const tan0 = 0,
    tan90 = "tanımsız",
    tan180 = 0,
    tan270 = "tanımsız",
    tan360 = 0

const cot0 = "tanımsız",
    cot90 = 0,
    cot180 = "tanımsız",
    cot270 = 0,
    cot360 = "tanımsız"

toplabtn.onclick = function x() {


    if (textbox1.value == "sin0") {
        textbox1.value = sin0;
    } else if (textbox1.value == "sin90") {
        textbox1.value = sin90;
    } else if (textbox1.value == "sin180") {
        textbox1.value = sin180;
    } else if (textbox1.value == "sin270") {
        textbox1.value = sin270;
    } else if (textbox1.value == "sin360") {
        textbox1.value = sin360;
    }

    if (textbox2.value == "sin0") {
        textbox2.value = sin0;
    } else if (textbox2.value == "sin90") {
        textbox2.value = sin90;
    } else if (textbox2.value == "sin180") {
        textbox2.value = sin180;
    } else if (textbox2.value == "sin270") {
        textbox2.value = sin270;
    } else if (textbox2.value == "sin360") {
        textbox2.value = sin360;
    }

    if (textbox1.value == "cos0") {
        textbox1.value = cos0;
    } else if (textbox1.value == "cos90") {
        textbox1.value = cos90;
    } else if (textbox1.value == "cos180") {
        textbox1.value = cos180;
    } else if (textbox1.value == "cos270") {
        textbox1.value = cos270;
    } else if (textbox1.value == "cos360") {
        textbox1.value = cos360;
    }

    if (textbox2.value == "cos0") {
        textbox2.value = cos0;
    } else if (textbox2.value == "cos90") {
        textbox2.value = cos90;
    } else if (textbox2.value == "cos180") {
        textbox2.value = cos180;
    } else if (textbox2.value == "cos270") {
        textbox2.value = cos270;
    } else if (textbox2.value == "cos360") {
        textbox2.value = cos360;
    }

    if (textbox1.value == "tan0") {
        textbox1.value = tan0;
    } else if (textbox1.value == "tan90") {
        textbox1.value = tan90;
    } else if (textbox1.value == "tan180") {
        textbox1.value = tan180;
    } else if (textbox1.value == "tan270") {
        textbox1.value = tan270;
    } else if (textbox1.value == "tan360") {
        textbox1.value = tan360;
    }

    if (textbox2.value == "tan0") {
        textbox2.value = tan0;
    } else if (textbox2.value == "tan90") {
        textbox2.value = tan90;
    } else if (textbox2.value == "tan180") {
        textbox2.value = tan180;
    } else if (textbox2.value == "tan270") {
        textbox2.value = tan270;
    } else if (textbox2.value == "tan360") {
        textbox2.value = tan360;
    }
    if (textbox1.value == "cot0") {
        textbox1.value = cot0;
    } else if (textbox1.value == "cot90") {
        textbox1.value = cot90;
    } else if (textbox1.value == "cot180") {
        textbox1.value = cot180;
    } else if (textbox1.value == "cot270") {
        textbox1.value = cot270;
    } else if (textbox1.value == "cot360") {
        textbox1.value = cot360;
    }

    if (textbox2.value == "cot0") {
        textbox2.value = cot0;
    } else if (textbox2.value == "cot90") {
        textbox2.value = cot90;
    } else if (textbox2.value == "cot180") {
        textbox2.value = cot180;
    } else if (textbox2.value == "cot270") {
        textbox2.value = cot270;
    } else if (textbox2.value == "cot360") {
        textbox2.value = cot360;
    }

    var toplam = (parseInt(textbox1.value)) + (parseInt(textbox2.value))
    label.innerHTML = parseInt(toplam)
    if (label.innerHTML == "NaN") {
        label.innerHTML = "Tanımsız"
    }
}

cosbtn.onclick = function cosfonk() {
    fonksiyonspan.innerHTML = "COSX"
}

sinbtn.onclick = function sinfonk() {
    fonksiyonspan.innerHTML = "SİNX"
}

tanbtn.onclick = function sinfonk() {
    fonksiyonspan.innerHTML = "TANX"
}

cotbtn.onclick = function sinfonk() {
    fonksiyonspan.innerHTML = "COTX"
}

logo.onclick = function() {
    textbox1.value = ""
    textbox2.value = ""
    label.innerHTML = ""
}