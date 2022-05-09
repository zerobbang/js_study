function Q(num){
    var Answer = document.getElementById('answer').value;
    console.log(Answer);
    
    // 문자열 처리
    if (isNaN(Answer)) {
        document.getElementById('output').innerHTML = Answer + " 숫자가 아님!";
        document.getElementById('sol').innerHTML = "";
    } else {
        document.getElementById('output').innerHTML = Answer;
        if (Answer == CAnswer) {
            document.getElementById('sol').innerHTML =  "정답!";
        } else {
            document.getElementById('sol').innerHTML = "정답이 아님!";
        }
    }
    
}

function Q2() {
    document.getElementById('output').innerHTML = ""
    document.getElementById('answer').value = ""
    document.getElementById('sol').innerHTML = ""
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById('demo').innerHTML = num1 + " + " + num2;
    var CAnswer = num1 + num2;
}