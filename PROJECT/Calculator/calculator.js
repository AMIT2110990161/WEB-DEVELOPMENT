buttons = document.querySelectorAll('button')
let answer = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        result.value = answer;
        if (buttonText == 'c') {
            answer = "";
            result.value = answer;
        }
        else if (buttonText == '=') {
            result.value = eval(answer);
        }
        else {
            answer += buttonText;
            result.value = answer;
        }

    })
}

