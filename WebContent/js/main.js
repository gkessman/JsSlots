require(['spin', 'validate', 'display', 'errLog'],
function (bet, spin, results, err) {

var coins = 0;
var bet =  0;
var priorBet = 0;
var win = false;
var winRow = [];
var payout = 0;
var snd = new Audio("audio/ohyeah.wav"); // buffers automatically when created
var sIcons = {};
var sOut = [[],[],[]];
var sIn = [];

sIcons.cherry = {
    id: 1,
    value: .5, 
    imgsrc: "<img src=img/cherry.png>"
};
sIcons.bar = {
	id: 2,
    value: 1,
    imgsrc: "<img src=img/bar.png>"
};
sIcons.horseshoe = {
	id: 3,
    value: 1.50,
    imgsrc: "<img src=img/whoreshoe.png>"
};
sIcons.diamond = {
	id: 4,
    value: 2,
    imgsrc: "<img src=img/diamond.png>"
};
sIcons.seven = {
  	id: 5,
    value: 5,
    imgsrc: "<img src=img/seven.png>"
};
sIcons.dollar = {
    id: 6,
    value: 6,
    imgsrc: "<img src=img/dollar.png>"
};
sIcons.whoreshoe = {
    id: 7,
    value: 7,
    imgsrc: "<img src=img/whoreshoe.png>"
};
sIcons.lemon = {
    id: 8,
    value: 8,
    imgsrc: "<img src=img/lemon.png>"
};
 
sIn[0] = sIcons.cherry;
sIn[1] = sIcons.bar;
sIn[2] = sIcons.horseshoe;
sIn[3] = sIcons.diamond;
sIn[4] = sIcons.seven;
sIn[5] = sIcons.dollar;
sIn[6] = sIcons.whoreshoe;
sIn[7] = sIcons.lemon;

spin.spinWheel(sOut);
display.results();  //For initial population of slots when page is loaded
document.getElementById('prompt').innerHTML = 'Welcome To Slots. Insert Coins';
document.getElementById('button').innerHTML = 'Insert';
document.getElementById('button').setAttribute("onClick", "main()");

function main() {
    coins = document.getElementById('input').value
    document.getElementById('coins').innerHTML = coins;
    document.getElementById('prompt').innerHTML = 'Please place bet below';  
    document.getElementById('button').innerHTML = 'PLAY';
    document.getElementById('input').value = 0;
    document.getElementById('button').setAttribute("onClick", "play()");
}

function play() {
    bet = document.getElementById('input').value;
    win = false;
    winRow = [];
    payout = 0;
    validate.inString(bet)
    coins = coins - bet       
    document.getElementById('coins').innerHTML = coins;
    spin.spinWheel(spin);
    validate.results(spin);
    display.results(spin);
    }
});