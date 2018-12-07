
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
        quizz;

    switch (course){
        case 1 : quizz = data.cours1;break;
        case 2 : quizz = data.cours2;break;
        case 3 : quizz = data.cours3;break;
        case 4 : quizz = data.cours4;break;
    }

    console.log(nbr);

    for(var i=1; i<=nbr;i++){
        var res = getResponse('q'+i);
        console.log("compare q"+i +"= "+res+" with : "+quizz[i-1].response.variable);
        if(res == quizz[i-1].response.variable){
            score++;
        }
    }

    alert(score)
}