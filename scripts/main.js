
function getResponse(question) {
    var elem = document.getElementsByName(question);

    for (var i = 0, length = elem.length; i < length; i++) {
        if (elem[i].checked) {
            return elem[i].value;
        }
    }
}

function calcScore(course) {
    var nbr = document.getElementById('nbr_quest').value,
        score = 0,
        quizz,
        questions = document.getElementsByClassName('question-content'),
        result = document.getElementById('result');



    switch (course) {
        case 1: quizz = data.java; break;
        case 2: quizz = data.android; break;
        case 3: quizz = data.kotlin; break;
        case 4: quizz = data.git; break;
        case 5: quizz = data.cpp; break;
    }

    for (var i = 1; i <= nbr; i++) {
        var j, res = getResponse('q' + i),
            answer = quizz[i - 1].variable,
            answers = questions[i - 1].getElementsByTagName('li');
        if (res == answer) {
            score++;
        }

        for (j = 0; j < answers.length; j++) {
            if (answers[j].getElementsByTagName('input')[0].value == answer) {
                answers[j].getElementsByTagName('label')[0].style.background = "#00A99D"
                answers[j].getElementsByTagName('label')[0].style.color = "#FFF"
            } else if (answers[j].getElementsByTagName('input')[0].value == res) {
                answers[j].getElementsByTagName('label')[0].style.background = "#DD1B3C"
                answers[j].getElementsByTagName('label')[0].style.color = "#FFF"
            }
        }
    }
    document.getElementsByClassName("effet-centre")[0].style.display = "none"
    result.innerText = "Votre Score = " + score + " / " + nbr;
    result.style.visibility = "visible"
}
