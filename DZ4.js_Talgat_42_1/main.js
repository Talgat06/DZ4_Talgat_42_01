    // Задание 1
    let counter = 0;
    const display = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    function counterDisplay() {
        display.textContent = counter;

        if (counter > 0) {
            display.style.color = 'green';
        } else if (counter === 0) {
            display.style.color = 'black';
        }
    }

    incrementButton.addEventListener('click', () => {
        counter++;
        counterDisplay();
    });

    decrementButton.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            counterDisplay();
        }

        if (counter === 0) {
            display.style.color = 'black';
        } else {
            display.style.color = 'red';
        }
    });

    // Задание 2
    document.getElementById('box').addEventListener("mousemove", (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        document.getElementById('coordinates').textContent = `(x: ${x}, y: ${y})`;
    });

    // Задание 3
        document.getElementById("red").style.backgroundColor = "grey";
        document.getElementById("yellow").style.backgroundColor = "grey";
        document.getElementById("green").style.backgroundColor = "grey";

        let svet = prompt(
            "Введите цвет светофора"
        ).toLowerCase();

        if (svet === "красный") {
            alert("Stop!");
            document.getElementById("red").style.backgroundColor = "red";
        } else if (svet === "жёлтый") {
            alert("Wait");
            document.getElementById("yellow").style.backgroundColor = "yellow";
        } else if (svet === "зелёный") {
            alert("Go");
            document.getElementById("green").style.backgroundColor = "green";
        } else {
            alert("Введите только цвета светафора !")
        }

