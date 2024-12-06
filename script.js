	let countdown;
        let timeLeft;
        const display = document.getElementById('display');
        const alarmSound = document.getElementById('alarmSound');

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
        });

        function startCountdown() {
            clearInterval(countdown);
            countdown = setInterval(function() {
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    alarmSound.play();
                    display.innerHTML = "Time's up!";
                } else {
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
