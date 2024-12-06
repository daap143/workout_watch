let countdown;
let timeLeft;
let rounds = 0;
const display = document.getElementById('display');
const round = document.getElementById('round');

document.getElementById('startBtn').addEventListener('click', function() {
    const input = document.getElementById('timeInput').value;
    timeLeft = parseInt(input);
    if (isNaN(timeLeft) || timeLeft <= 0) return;
    startCountdown();
});

document.getElementById('stopBtn').addEventListener('click', function() {
    clearInterval(countdown);
});

document.getElementById('resetBtn').addEventListener('click', function() {
    clearInterval(countdown);
    display.innerHTML = "00:00";
    document.getElementById('timeInput').value = '';
    rounds = 0;
});

document.getElementById('restartBtn').addEventListener('click', function() {
    input = document.getElementById('timeInput').value;
    timeLeft = parseInt(input);
    rounds++;
    round.innerHTML = rounds;
    startCountdown();
});

function startCountdown() {
    clearInterval(countdown);
    countdown = setInterval(function() {
	if (timeLeft <= 0) {
	    speak("time's upp.....");
	    clearInterval(countdown);
	    display.innerHTML = "Time's up!";
	    rounds++;
            round.innerHTML = rounds;
	} else {
	    text = timeLeft.toString();
	    speak(text);
	    timeLeft--;
    	    display.innerHTML = formatTime(timeLeft);
	}
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 2;
    window.speechSynthesis.speak(utterance);
}

