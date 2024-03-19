let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt; and frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frame&gt;",
        "right_answer": 2
    },
    {
        "question": "Wie stellt man Text am BESTEN fett dar?",
        "answer_1": "&lt;strong&gt;",
        "answer_2": "CSS nutzen",
        "answer_3": "&lt;bold&gt;",
        "answer_4": "&lt;b&gt;",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": 1
    },
    {
        "question": "Wie definiert man in JacaScript eine Variable?",
        "answer_1": "lett 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion()
}

function showQuestion() {
    let question = questions[currentQuestion]; /* Wir machen einen Container und holen uns das erste Element aus dem Array*/

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); /*In dieser Variable wird der letzte Buchstabe der vorherigen Variable "selection" gespeichert. In diesem Fall die nummer der Richtigen Frage*/
    let idOfRightAnswer = `answer_${question['right_answer']}`; /*greift auf die ID der richtigen Antwort der aktuellen Frage zu und stellt sie in einer Variable bereit*/

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success'); /* parent.Node verändert die klasse des übergeordnetem div der selection. mit classList.add kann mit mit einem String eine CSS classe hinzufügen*/
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger'); /*gleiches spiel für die Falsche Antwort wie oben bei der richtigen Antwort*/
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); /*Nutzt die Variable idOfRightAnswer um die richtige Antwort grün anzuzeigen wenn eine Falsche angewählt wurde*/
    }
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestion++; //z.B von 0 auf 1
    document.getElementById("next-button").disabled = true; // buttonw ird disabled
    resetAnswerButtons() //Antworten werden resettet
    showQuestion(); // nächste Frage wird angezeigt
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger', 'bg-success')
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger', 'bg-success')
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger', 'bg-success')
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger', 'bg-success')
}

