
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

    switch (course){
        case 1 : quizz = data.cours1;break;
        case 2 : quizz = data.cours2;break;
        case 3 : quizz = data.cours3;break;
        case 4 : quizz = data.cours4;break;
    }

    for(var i=1; i<=nbr;i++){
        var j,res = getResponse('q'+i),
            answer = quizz[i-1].response.variable,
            answers = questions[i-1].getElementsByTagName('li');

        console.log("compare q"+i +"= "+res+" with : "+quizz[i-1].response.variable);
        if(res == answer){
            score++;
        }

        for(j = 0;j<answers.length;j++){
            if(answers[j].getElementsByTagName('input')[0].value == answer){
                answers[j].getElementsByTagName('label')[0].style.background = "#01A99C"
            }else if(answers[j].getElementsByTagName('input')[0].value == res){
                answers[j].getElementsByTagName('label')[0].style.background = "#DF1C3E"
            }
        }
    }


    result.innerText = "Votre Score = "+score + " / "+nbr;
    result.style.visibility = "visible"
}