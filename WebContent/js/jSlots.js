var coins = 0;
var bet =  0;
var priorBet = 0;
var keepPlaying = false;
var win = false;
var winRow = [];
var payout = 0;
var sIcons = {};

sIcons.cherry = {
    name: " Cherry ",
    id: 1,
    value: 1 
};
sIcons.bar = {
    name: "  Bar   ",
	id: 2,
    value: 1.25
};
sIcons.silver = {
    name: " Silver ",
	id: 3,
    value: 1.50
};
sIcons.gold = {
    name: "  Gold  ",
	id: 4,
    value: 2
};
sIcons.seven = {
    name: "   7    ",
	id: 5,
    value: 5
};

var sOut = [[],[],[]];
var sIn = [];
sIn[0] = sIcons.cherry;
sIn[1] = sIcons.bar;
sIn[2] = sIcons.silver;
sIn[3] = sIcons.gold;
sIn[4] = sIcons.seven;

function spin() {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            sOut[y][x] = sIn[Math.floor(Math.random() * 5)];
        }
    }
}

function main() {

document.getElementById('prompt_text').innerHTML += 'Welcome To Slots! Insert Coins';

 //coins = prompt("Welcome to Slots! Insert Coins");
 coins = document.getElementById('input').value
 while(coins > 0 || bet !== 'no' || bet !== null){
     bet = prompt("Enter Bet");
     if(bet === 'no' || bet === null){
         break;
     } else if (bet === '') {
 		bet = priorBet;
     }
     play(bet);
 }
}

function play(bet) {
	priorBet = bet;
    win = false;
    winRow = [];
    payout = 0;
    spin();
    //show results of spin
    console.log(" ");
    console.log(coins + " - " + bet + " = " + (coins = coins - bet) + " coins left");
    for (var i = 0; i < 3; i++) {
        if ((sOut[i][0].id === sOut[i][1].id) && (sOut[i][1].id === sOut[i][2].id)) {
            console.log("-----------------------------");
            console.log("| " + sOut[i][0].name + "|" + sOut[i][1].name + "|" + sOut[i][2].name + "|  WINNER!");
            win = true;
            winRow.push(i);
        } else {
            console.log("-----------------------------");
            console.log("| " + sOut[i][0].name + "|" + sOut[i][1].name + "|" + sOut[i][2].name + "|");
        }        
    }
    console.log("-----------------------------");
    console.log(" ");
    
    if (win) {
        for (i = 0; i < winRow.length; i++) {
            payout = payout + (bet * sOut[(winRow[i])][1].value);       
        }
		coins = coins + payout;
        console.log("Total Payout: " + payout + " | Total Coins: " + coins + " coins");
    }
    
}


main();


if (coins <= 0) {
    console.log("You have no more coins, sorry!");
} else if (bet === 'no' || bet === null){
    console.log("Thanks for playing!");
}



