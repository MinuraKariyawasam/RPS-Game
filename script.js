function rpsGame(yourChoice) {

    var yourChoice, botChoice;
    botChoice = randomBotChoice();
    var result = rpsWinner(yourChoice, botChoice);
    var message = finalMessage(result);
    rpsFrontEnd(yourChoice, botChoice, message);
}

function randomBotChoice() {
    var rpsArray = ['rock', 'paper', 'scissors'];
    // random number || rpsArray[1]
    var computerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerChoice;
}

function rpsWinner(yourChoice, botChoice) {

    var rpsObject = {
        // user : computer 
        // win - 1 , lose - 2 , draw - 0
        "rock": { 'paper': 2, 'rock': 0, 'scissors': 1 },
        "paper": { 'scissors': 2, 'paper': 0, 'rock': 1 },
        "scissors": { 'rock': 2, 'scissors': 0, 'paper': 1 }
    };

    // user perspective 
    var yourScore = rpsObject[yourChoice][botChoice];
    // computer perspective 
    var botScore = rpsObject[botChoice][yourChoice];

    return [yourScore, botScore];

}

function finalMessage([yourScore, computerScore]) {

    // win - 1 , lose - 2, draw - 0
    if (yourScore === 2) {
        return { 'message': 'You lost!', 'color': 'red' };
    } else if (yourScore == 0) {
        return { 'message': 'You tied!', 'color': 'blue' };
    } else {
        return { 'message': 'You win!', 'color': 'green' };
    }

}

function rpsFrontEnd(yourChoice, botChoice, FinalMessage) {

    var imgDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // removing all elements 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // create div classes for all elements 
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src=" + imgDatabase[yourChoice] + ">"
    messageDiv.innerHTML = "<h1 style='color:" + FinalMessage['color'] + "'; font-size:60px;>" + FinalMessage['message'];
    botDiv.innerHTML = "<img src=" + imgDatabase[botChoice] + ">"

    // adding element to game
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
