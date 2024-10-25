/**
 * Author: Carson Fujita
 */


/**
 * Supposed to remove magic numbers....
 */
const ANSWER_ELEMENT = Object.freeze({
    ELEMENT: 'input',
    CLASS: Object.freeze({
        DEFAULT: 'answer',
        SELECTED: 'answer selected'
    }),
    TYPE: 'button',
    NAME: 'answer'
})

/**
 * Handler of the HTML; Manager of Questions.
 */
class Quiz {

    /**
     * The states of a quiz as a enumerator
     */
    static STATE = Object.freeze(
        {
            START: Symbol("Start"),
            SKIPPING: Symbol("Skipping"),
            SUBMIT: Symbol("Submitting"),
            CONTINUE: Symbol("Continue"),
            END: Symbol("End")
        });

    
    static MESSAGE = Object.freeze(
        {
            CORRECT: 'Correct',
            WRONG: 'Incorrect'
        });
    /**
     * 
     * @param {*} answer 
     * @returns 
     */
    static createAnswer(answer) {
        let input = document.createElement(ANSWER_ELEMENT.ELEMENT);
        input.setAttribute('name', ANSWER_ELEMENT.NAME);
        input.setAttribute('class', ANSWER_ELEMENT.CLASS.DEFAULT);
        input.setAttribute('type', ANSWER_ELEMENT.TYPE);
        input.setAttribute('value', answer);

        return input;
    }

    static queItem(question, classType) {
        let que = document.createElement('div');
        que.setAttribute('class', classType);

        //the number
        let number = document.createElement('div');
        number.setAttribute('class', 'question-number');

        //create the question
        let title = document.createElement('p');


        title.innerHTML = question.question;
        number.innerHTML = question.number;

        que.appendChild(number);
        que.appendChild(title);
        return que;
    }

   

    #que = Array();


    #explainElement; //TODO: fix
    /**
     * The questions in the quiz
     */
    #questions = [new Question()];

    /**
     * Total Answered Questions
     */
    #totalAnswered = 0;

    /**
     * Total Answered Questions that were wrong
     */
    #totalWrong = 0;

    /**
     * Time limit of the Quiz
     */
    #timeLimit = new Date();

    /**
     * Build a quick auth form.
     * @returns A HTMLElement containing a quick form
     */
    static buildAuth(){
        let form = document.createElement('form');
        form.setAttribute('name','login');
        form.setAttribute('class','flex-column');

        let title = document.createElement('h1');
        title.innerText= 'LOGIN (not really)'

        let username = document.createElement('input');
        username.setAttribute('type','text');
        username.setAttribute('required','required');
        username.setAttribute('name','username');
        username.setAttribute('class','text-input');
        username.setAttribute('placeholder','username');

        let password = document.createElement('input');
        password.setAttribute('type','password');
        password.setAttribute('required','required');
        password.setAttribute('name','password');
        password.setAttribute('class','text-input');
        password.setAttribute('placeholder','password');

        let submit = document.createElement('input');
        submit.setAttribute('type','submit');
        submit.setAttribute('value','login')

        form.appendChild(title);
        form.appendChild(username);
        form.appendChild(password);
        form.appendChild(submit);
        return form
    }

    /**
     * Constructs the quiz based on an array of question objects
     * @param {Question} question1 
     * @see Question The object class used here.
     */
    constructor(questions) {
        let main = document.getElementById('quiz');
 
        let auth = Quiz.buildAuth();
        auth.addEventListener('submit', (event) => {
            let form = document.forms.item(1);
            if(
                form.children.namedItem('password').value == 'password' &&
                form.children.namedItem('username').value == 'username'
            ){
                let main = document.getElementById('quiz')
                main.removeChild(main.children.namedItem('login'))
                main.children.namedItem('wrapper').setAttribute('class','')
                this.#start();
            } else{
                alert("username: 'username', password: 'password'");
            }
            
            
        });
        main.appendChild(auth);


        this.#questions = questions;

        //this.#start()
        
    }

    /**
     * Starts the quiz.
     */
    #start(){
        let form = document.getElementById('answers');
        let details = document.getElementById('quiz-details');
        document.getElementById('question-total').innerText = this.#questions.length
        document.getElementById('questions-left').innerText = this.questions.length

        let quizFunctions = form.children.namedItem('quiz-functions')
        let submit = quizFunctions.children.namedItem('submit');
        let skip = quizFunctions.children.namedItem('skip');
        let continueBtn = quizFunctions.children.namedItem('continue');

        skip.addEventListener('click', this.#skipQuestion.bind(this));
        submit.addEventListener('click', this.#submitAnswer.bind(this));
        continueBtn.addEventListener('click', this.#continue.bind(this));
        this.#buildForm(form)
        this.#buildQue(details);
    }

    /**
     * Creates a card explaining why the answer is right or wrong.
     * @returns An card explaining why the answer is right or wrong.
     */
    #createExplanation(headerText, message){
        let container =document.createElement('div');
        container.setAttribute('class','card');
        container.setAttribute('id','explanation');
        let header = document.createElement('h1');
        header.innerText = headerText;
        let paragraph = document.createElement('p');

        paragraph.innerText = message;
        
        container.appendChild(header);
        container.appendChild(paragraph);
        return container;
    }

    get currentQuestion() {
        return this.#questions[this.#totalAnswered];
    }


    get questions() {
        return this.#questions
    }
    get totalAnswered() {
        return this.#totalAnswered;
    }

    get totalQuestions() {
        return this.#questions.size;
    }

    get totalWrong() {
        return this.#totalWrong;
    }

    addQuestion(question) {
        this.#questions.push(question);
    }

    /**
     * Handles the click event for answers by adding the selected answer to selected answers array
     * @param {EventListener} eventTarget the click event
     */
    HandleSelection(eventTarget) {
        

        let element = eventTarget.target;

        //if answer isn't selected
        if (element.getAttribute('class') == ANSWER_ELEMENT.CLASS.DEFAULT) {
            //if allow the user to select an answer if it's multiple choice or they haven't selected one yet.
            if(this.currentQuestion.answers.type == Answers.Type.MULTIPLE_SELECT
                || this.currentQuestion.answers.selected.size < 1
            ){
                //display to user that this item is selected
                element.setAttribute('class', ANSWER_ELEMENT.CLASS.SELECTED);
                this.currentQuestion.answers.select(element.value)
            } else {
                //switch their selection to what they selected.
                document.getElementsByClassName(ANSWER_ELEMENT.CLASS.SELECTED).item(0).setAttribute('class',ANSWER_ELEMENT.CLASS.DEFAULT);
                element.setAttribute('class', ANSWER_ELEMENT.CLASS.SELECTED);
                this.currentQuestion.answers.selected = new Set([element.value]);
            }

        } else {
            //unselect the item
            element.setAttribute('class', ANSWER_ELEMENT.CLASS.DEFAULT);
            this.currentQuestion.answers.remove(element.value)
        }
    }

    /**
     * Handles the DOM event where the mouse clicked this
     * @param {EventTarget} eventTarget the event target for continue
     */
    #continue(){
        this.update(Quiz.STATE.CONTINUE);
    }

    /**
     * Handles the DOM event where the mouse clicked this
     * @param {EventTarget} eventTarget the event target for submission
     */
    #submitAnswer(eventTarget) {
        this.update(Quiz.STATE.SUBMIT);
    }

    /**
     * Handles the DOM 'click' event
     * @param {EventTarget} eventTarget the event
     */
    #skipQuestion(eventTarget) {
        this.currentQuestion.answers.selected = new Set();
        this.update(Quiz.STATE.SKIPPING);
    }

    /**
     * Shifts the que.
     * @param {HTMLElement} remaining The element containing the que
     * @returns the shifted que.
     */
    #shiftQue(remaining = document.getElementById('remaining-questions')){
        remaining.removeChild(remaining.children.item(0));
        let first = this.#que.shift();
        first.setAttribute('class', 'next-question flex-row');
        if(this.#que.length > 0){
            this.#que.at(0).setAttribute('class', 'current-question next-question flex-row')
        }
        return first
    }

    /**
     * Updates the quiz based on a state of submission or skipping.
     * @param {Quiz.STATE} state 
     */
    update(state) {
        
        let showAnswers = false;
        let form = document.getElementById('answers');
        let details = document.getElementById('quiz-details');
        let quizFunctions = form.children.namedItem('quiz-functions');

        let buttons = quizFunctions.children;
        
        let btnSkip = buttons.namedItem('skip');
        let btnContinue = buttons.namedItem('continue');
        let btnSubmit = buttons.namedItem('submit');
        
        //kill form
        let questions = form.children.namedItem('answer');
        while(questions != null){
            //console.log(form.children.length);
            form.removeChild(form.children.namedItem('answer'));
            questions = form.children.namedItem('answer');
            
        }

        //The que
        let remaining = details.children.namedItem('remaining-questions');
        
        
        let total = (this.totalAnswered+1); //including itself.

        //Yes, I know it's a switch statement for two cases. It's this way incase I add more states.
        switch (state) {
            case Quiz.STATE.CONTINUE:

                //kill que's first item
               
                this.#shiftQue(remaining);
                
                //update html to include new question.

                //get rid of the explanation
                this.#explainElement = document.getElementById('explanation')
                this.#explainElement.parentElement.removeChild(this.#explainElement);

                //show the functions again
                btnSkip.setAttribute('class','light-btn skip');
                btnSubmit.setAttribute('class','light-btn sumbit');
                btnContinue.setAttribute('class', 'hidden');

                //force UI to update entirely
                ++this.#totalAnswered;
                break;
            case Quiz.STATE.SKIPPING:
                console.log('skip');

                let shift = this.#questions.splice(this.#totalAnswered,1)[0];
                console.log(shift);
                

                this.#questions.push(shift);
                let first = this.#shiftQue(remaining);
                remaining.appendChild(first);
                this.#que.push(first);
                break;
            case Quiz.STATE.SUBMIT:
                let reference = this.currentQuestion.answers;
                let isCorrect = reference.mark();
                let total = this.#totalAnswered+1;

                let headerText = Quiz.MESSAGE.CORRECT;
                if(!isCorrect){
                    this.#totalWrong++;
                    headerText = Quiz.MESSAGE.WRONG;
                }
                
                
                //update counters
                document.getElementById('questions-wrong').innerText = this.#totalWrong;
                document.getElementById('questions-left').innerText = (this.#questions.length - total);
                document.getElementById('questions-correct').innerText = (total - this.#totalWrong);


                
               //Create an Explanation
                this.#explainElement = this.#createExplanation(headerText, reference.explaination);
                
                showAnswers = true;
                //hide submit and skip and display the continue button
                btnSkip.setAttribute('class','hidden');
                btnSubmit.setAttribute('class','hidden');
                btnContinue.setAttribute('class', 'light-btn');

                form.parentElement.parentElement.appendChild(this.#explainElement);
                break;
        }
        //if the quiz is finished then
        if(this.currentQuestion == undefined){
            //hide everything
            form.parentElement.setAttribute('class','hidden');
            remaining.parentElement.setAttribute('class','hidden');
            
        } else {
            this.#buildForm(form, showAnswers);
        }
    }


    /**
     * buildForms the HTML form element
     * @param {HTMLElement} form
     */
    #buildForm(form, showAnswers = false) {
        let questionHead = form.parentElement.children.namedItem('question-head');
        let number = questionHead.children.namedItem("question-number");
        let question = questionHead.children.namedItem("question");
        number.innerText = this.currentQuestion.number;
        question.innerText = this.currentQuestion.question;
        this.currentQuestion.answers.shuffle().forEach((element) => {
            let answer = Quiz.createAnswer(element);
            if(showAnswers){
                
                if(this.currentQuestion.answers.correct.has(element)){
                    answer.setAttribute('class', 'correct '+ ANSWER_ELEMENT.CLASS.DEFAULT);
                }else{
                    answer.setAttribute('class', 'incorrect '+ ANSWER_ELEMENT.CLASS.DEFAULT );
                    
                }
            } else{
                answer.addEventListener('click', this.HandleSelection.bind(this));
            }
            
            form.appendChild(answer);
        });
    }



    /**
     * builds the question que
     * @param {HTMLElement} details
     */
    #buildQue(details) {
        //set the class of the container
        let remaining = details.children.namedItem('remaining-questions');
        let isFirst = true;
        this.#questions.forEach((question) => {
            let classType = 'next-question flex-row';
            if (isFirst) {
                isFirst = false;
                classType = "current-question ".concat(classType);
            }

            let que = Quiz.queItem(question, classType);
            this.#que.push(que);

            remaining.appendChild(que);
        });
    }
}

/**
 * the Answers Object which collects both the correct and wrong answers for multiple-choice or
 * single-choice (later will fully include any text question)
*/
class Answers {

    /**
    * Enumerator for the type of Question
    */
    static Type = Object.freeze(
        {
            MULTIPLE_SELECT: Symbol("Multiple Select"),
            SINGLE_CHOICE: Symbol("Single Choice"),
            TEXT: Symbol("Text")
        });


    /**
     * A collection of unique potential answers for a question.
     * @see #wrong the opposite
     */
    #correct = new Set(['']);

    /**
     * A collection of unique wrong answers for choice selection.
     * @see #correct the opposite
     */
    #wrong = new Set(['']);

    /**
     * Selected Answers. Answers stored that the user, quiz-taker, or question-answerer gives.
     * This is used as a submission for marking
     * @see mark()
     */
    #selected = new Set();


    /**
     * The `#explaination` contains the `string` value of why the correct answers are correct.
     * It's reccomeneded to include why the other answers are wrong.
     */
    #explaination = '';


    /**
     * Creates an Answers Object. Answers are perminant and cannot be changed after instaniation
     * @param {Set<string>} correctAnswers A collection of unique potential answers for a question.
     * @param {Set<string>} wrongAnswers A collection of unique wrong answers for choice selection.
     */
    constructor(correctAnswers, wrongAnswers, explaination) {
        this.#wrong = wrongAnswers;
        this.#correct = correctAnswers;
        this.#explaination = explaination;
    }

    /**
     * @returns read-only version of #correct
     * @see #correct
     */
    get correct() {
        return Object.freeze(this.#correct);
    }

    /**
     * @returns read-only version of #wrong
     * @see #wrong
     */
    get wrong() {
        return Object.freeze(this.wrong);
    }

    /**
     * @returns the user selected answers
     */
    get selected() {
        return this.#selected;
    }

    /**
     * @returns the explaination on why the correct answers are correct
     */
    get explaination(){
        return this.#explaination;
    }

    /**
     * Determines the type of question based on the amount of correct answers, and the amount of displayed wrong answers.
     * Any question with multiple correct answers is either a text question or a multiple choice question; that's determined by the amount of wrong
     * answers. If it's not either of those's its defaulted to single choice.
     * @returns The Type of question
     */
    get type() {
        if (this.#correct.size > 1) {
            if (this.#wrong.size == 0) {
                return Answers.Type.TEXT;
            }
            return Answers.Type.MULTIPLE_SELECT;
        }
        return Answers.Type.SINGLE_CHOICE;
    }

    /**
     * sets the `Set()` value of user answer selections.
     * @param {Set<string>} selected 
     */
    set selected(selected = new Set()) {
        this.#selected = selected;
    }

    /**
     * appends the `answer` to the user's selections aka `this.#selected` Object.
     * @param {string} answer 
     * @see #selected
     */
    select(answer) {
        this.#selected.add(answer);
    }

    /**
     * removes the entry in the `Set()` of user's selections.
     * @param {string} answer the removed entry
     */
    remove(answer) {
        this.#selected.delete(answer);
    }

    /**
     * After determining if the user's answer is a correct answer it will continue marking by 
     * type of question. 
     * It will then verify that you have every correct answer
     * @returns true if correct, false if wrong, and null if invalid question.
     */
    mark() {

        //iterate through all user's selections
        let iterator = this.#selected.values();

        //current submission answer
        let currentAnswer = iterator.next().value;

        //checks if this answer is a correct answer.
        let isCorrect = this.#correct.has(currentAnswer);

        //Switches between multiple types of questions
        switch (this.type) {
            case Answers.Type.SINGLE_CHOICE:
                // this shouldn't happen, but just incase
                if (this.#selected.size > 1) {
                    return false;
                }
                break;
            case Answers.Type.MULTIPLE_SELECT:
                //if the user has more answers than correct answers it's wrong.
                if (this.#correct.size != this.#selected.size) {
                    return false;
                }
                //iterate over every answer to confirm the user selected all of them.
                while (currentAnswer != null) {
                    if (this.#wrong.has(currentAnswer)) {
                        return false;
                    }
                    currentAnswer = iterator.next().value;
                }
                break;
            case Answers.Type.TEXT:
                //not implemented yet.
                break;
            default:
                console.log("Soft Error: There is no valid Type");
        }
        return isCorrect;
    }

    /**
     * shuffles the wrongs and right answers as an array
     * @returns a randomized array of both wrong and right answers
     */
    shuffle() {
        let choices = new Array();

        //Add all, and assign random key for sorting
        this.#correct.forEach(element => {
            choices.push({ value: element, key: Math.random() })
        });

        this.#wrong.forEach(element => {
            choices.push({ value: element, key: Math.random() })
        });

        //sort, then remove key, return that.
        return choices
            .sort((answer1, answer2) => answer1.key - answer2.key)
            .map(({ value }) => value)
    }




}

/**
 * Question class: the manager of answers.
 */
class Question {

    /**
     * The Question's assigned number.
     */
    #number = 1;

    /**
     * The question as a string.
     */
    #question = '';

    /**
     * The answers of a question
     * @see Answers
     */
    #answers = new Answers();

    /**
     * Constructs the Question Object.
     * @param {int} number the questions number
     * @param {string} question the question as a string
     * @param {Set<string>} correctAnswers the correct answers
     * @param {Set<string>} wrongAnswers the wrong answers displayed to user (so they can select)
     * @param {string} explaination the explanation of the question's answers
     */
    constructor(
        number = 1,
        question = '',
        correctAnswers = new Set(['']),
        wrongAnswers = new Set(['']),
        explaination = ''
    ) {
        this.#number = number;
        this.#question = question;
        this.#answers = new Answers(correctAnswers, wrongAnswers, explaination);
    }


    /**
     * @returns the question's number value.
     */
    get number() {
        return this.#number;
    }


    /**
     * @returns the string value of a question
     */
    get question() {
        return this.#question;
    }

    /**
     * @returns The answers of a question
     */
    get answers() {
        return this.#answers;
    }

}


function main() {

    let question1 = new Question(
        1,
        'Which is not a field of a Set Object?',
        new Set(['length']),
        new Set(['size']),
        "the Set object does not contain a length. The size of a set is a read-only getter while that's not the case for arrays which allow modifying the length to truncate the array."
    )

    let question2 = new Question(
        2,
        'Which of the following statements is used to control the flow of execution based on a condition?',
        new Set(['if-else Statement']),
        new Set(['labeled Statement','switch Statement']),
        `Switch statements control flow based on the expression value of an object not on a condition itself,
        labeled statements are any statements with a label and can be broken with a 'break' statement. `
    )

    let question3 = new Question(
        3,
        'The ______ statement executes a block of code based on multiple possible conditions.',
        new Set(['switch statment', 'else-if statement']),
        new Set(['if-else statement']),
        `Switch statements control flow based on the expression value of an object meaning you can execute a block of code based on multiple conditions (states)
        While and if-else statement executes on a single condition. The else-if statment allows multiple conditions by chaining if statments, however, if you're going
        to have a chain of these it may be time to consider a switch statement.`
    )
    let question4 = new Question(
        4,
        'Select a scripting languages',
        new Set(['JavaScript', 'Python']),
        new Set(['CSS','HTML']),
        `CSS and HTML are called Markup languages.`
    )

    //test
    let questions = [question1, question2, question3, question4];
    let quiz = new Quiz(questions);


}

main();