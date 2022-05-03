player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Qusetion - "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer - "+player2_name;

function send(){

word_1 = document.getElementById("word").value;
word = word_1.toLowerCase();

char_at_1 = word.charAt(1);
console.log(char_at_1);

char_at_2 = word.charAt(Math.floor(word.length/2))
console.log(char_at_2);

char_at_3 = word.charAt(word.length-1);
console.log(char_at_3);

replace_1 = word.replace(char_at_1,"_");
console.log(replace_1);

replace_2 = replace_1.replace(char_at_2,"_");

replace_3 = replace_2.replace(char_at_3,"_");
console.log(replace_3);

question_word = "<h4 id='word_display'> Q. "+ replace_3+"</h4>"
input_box = "<br><br> <input id='input_box' type='text' placeholder='Answer'>"
check_button = "<br><br> <button class= 'btn btn-info' onclick='check()'>Check</button>"
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = ""; 
}

q_turn = "player1";
a_turn = "player2";

function check() {

answer_1 = document.getElementById("input_box").value;
answer = answer_1.toLowerCase();
console.log(answer);
if(answer == word)
{
    if(a_turn == "player1")
    {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else
    {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}
if(q_turn == "player1")
{
    q_turn = "player2";
    document.getElementById("player_question").innerHTML = "Question - "+player2_name;
}
else
{
    q_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question - "+player1_name;
}

if(a_turn == "player1")
{
    a_turn = "player2";
    document.getElementById("player_answer").innerHTML = "Answer - "+player2_name;
}
else
{
    a_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer - "+player1_name;
}
document.getElementById("output").innerHTML = "";
}