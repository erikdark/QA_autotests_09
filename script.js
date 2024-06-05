document.addEventListener('DOMContentLoaded', function() {
    // Генерация случайных чисел a и b
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let correctAnswer = a + b;

    // Отображение задания
    let challengeElement = document.getElementById('challenge');
    challengeElement.textContent = `What is ${a} + ${b}?`;

    // Заполнение выпадающего списка
    let answerSelect = document.getElementById('answerSelect');
    let correctOptionIndex = Math.floor(Math.random() * 100);
    for (let i = 0; i < 100; i++) {
        let option = document.createElement('option');
        if (i === correctOptionIndex) {
            option.value = correctAnswer;
            option.textContent = correctAnswer;
        } else {
            let randomValue;
            do {
                randomValue = Math.floor(Math.random() * 200);
            } while (randomValue === correctAnswer);
            option.value = randomValue;
            option.textContent = randomValue;
        }
        answerSelect.appendChild(option);
    }

    // Таймер на 5 секунд
    let timeLeft = 5;
    let timerElement = document.getElementById('timer');
    timerElement.textContent = timeLeft;

    let timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('submitBtn').disabled = true;
            timerElement.textContent = "Time's up!";
        } else {
            timerElement.textContent = timeLeft;
        }
        timeLeft -= 1;
    }, 1000);

    // Разблокировка кнопки через 1 секунду
    setTimeout(function() {
        document.getElementById('submitBtn').disabled = false;
    }, 1000);

    // Обработчик отправки формы
    let submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function() {
        let selectedValue = parseInt(answerSelect.value);
        let messageElement = document.getElementById('message');
        if (selectedValue === correctAnswer) {
            messageElement.textContent = "You guessed it! Well done!";
        } else {
            messageElement.textContent = "Incorrect answer!";
            messageElement.style.color = 'red';
        }
    });
});
