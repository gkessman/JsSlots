var coins = 0;
var bet =  0;
var priorBet = 0;
var win = false;
var winRow = [];
var payout = 0;
var sIcons = {};

sIcons.cherry = {
    name: " Cherry ",
    id: 1,
    value: .5 
    imgsrc: '<img src=cherry.png>'
};
sIcons.bar = {
    name: "  Bar   ",
	id: 2,
    value: 1
    imgsrc: '<img src=bar.png>'
};
sIcons.horseshoe = {
    name: " Silver ",
	id: 3,
    value: 1.50,
    imgsrc: '<img src=bell.png>'
};
sIcons.diamond = {
    name: "  Gold  ",
	id: 4,
    value: 2,
    imgsrc: '<img src=diamond.png>'
};
sIcons.seven = {
    name: "   7    ",
 	id: 5,
    value: 5,
    imgsrc: "<img src=seven.png>"
};
 
var sOut = [[],[],[]];
var sIn = [];
sIn[0] = sIcons.cherry;
sIn[1] = sIcons.bar;
sIn[2] = sIcons.horseshoe;
sIn[3] = sIcons.diamond;
sIn[4] = sIcons.seven;

function spin() {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            sOut[y][x] = sIn[Math.floor(Math.random() * 5)];
        }
    }
}

function intro() {
    document.getElementById('prompt').innerHTML = 'Welcome To Slots! Insert Coins';
    document.getElementById('button').innerHTML = 'Insert';
    document.getElementById('button').setAttribute("onClick", "main()");
}

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
        if (isNaN(bet)) {
            validateInput();
        } else { 
        coins = coins - bet       
        document.getElementById('coins').innerHTML = coins;
        spin();
        validateResults();
        validateWin();
    }
}

function validateWin() {
    if (win) {
        for (i = 0; i < winRow.length; i++) {
            payout = payout + (bet * sOut[(winRow[i])][1].value);       
        }
		coins = coins + payout;
        document.getElementById('coins').innerHTML = coins;
        document.getElementById('prompt').innerHTML = 'HOORAY! You Won ' + payout + ' Coins!'; 
    }   
}


function validateResults() {
    //show results of spin
    for (var i = 0; i < 3; i++) {
        if (((sOut[i][0].id === sOut[i][1].id) && (sOut[i][1].id === sOut[i][2].id))||
            ((sOut[0][0].id === sOut[1][1].id) && (sOut[1][1].id === sOut[2][2].id))||
            ((sOut[0][2].id === sOut[1][1].id) && (sOut[1][1].id === sOut[2][0].id))) {
            document.getElementById(i + '_0').innerHTML = sOut[i][0].imgsrc;
            document.getElementById(i + '_1').innerHTML = sOut[i][1].imgsrc;
            document.getElementById(i + '_2').innerHTML = sOut[i][2].imgsrc;
            win = true;
            winRow.push(i);
        } else {
            document.getElementById(i + '_0').innerHTML = sOut[i][0].imgsrc;
            document.getElementById(i + '_1').innerHTML = sOut[i][1].imgsrc;
            document.getElementById(i + '_2').innerHTML = sOut[i][2].imgsrc;
            document.getElementById('winnings_prompt').innerHTML = 'Sorry, please try again!'; 
        }        
     }

}

function validateInput() {
    if (bet == "winrow") {
        bet = 100;  //just to give a value for winning computation. Otherwise coins value becomes isNaN
        spin();
        sOut[1][1] = sOut[1][0];
        sOut[1][2] = sOut[1][0];
    } else if (bet == "windiag") {
        bet = 100;
        spin();
        sOut[1][1] = sOut[0][0];
        sOut[2][2] = sOut[0][0];
    }
    validateResults();
    validateWin();
}

intro();

if (coins <= 0) {
    console.log("You have no more coins, sorry!");
} else if (bet === 'no' || bet === null){
    console.log("Thanks for playing!");
}
