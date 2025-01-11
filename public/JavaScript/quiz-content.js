import * as mod from "../../quiz.js";


function main() {

    let question1 = new mod.Question(
        1,
        'Which is not a field of a Set Object?',
        new Set(['length']),
        new Set(['size']),
        "the Set object does not contain a length. The size of a set is a read-only getter while that's not the case for arrays which allow modifying the length to truncate the array."
    )

    let question2 = new mod.Question(
        2,
        'Which of the following statements is used to control the flow of execution based on a condition?',
        new Set(['if-else Statement']),
        new Set(['labeled Statement','switch Statement']),
        `Switch statements control flow based on the expression value of an object not on a condition itself,
        labeled statements are any statements with a label and can be broken with a 'break' statement. `
    )

    let question3 = new mod.Question(
        3,
        'The ______ statement executes a block of code based on multiple possible conditions.',
        new Set(['switch statment', 'else-if statement']),
        new Set(['if-else statement']),
        `Switch statements control flow based on the expression value of an object meaning you can execute a block of code based on multiple conditions (states)
        While and if-else statement executes on a single condition. The else-if statment allows multiple conditions by chaining if statments, however, if you're going
        to have a chain of these it may be time to consider a switch statement.`
    )
    let question4 = new mod.Question(
        4,
        'Select a scripting languages',
        new Set(['JavaScript', 'Python']),
        new Set(['CSS','HTML']),
        `CSS and HTML are called Markup languages.`
    )

    //test
    let questions = [question1, question2, question3, question4];
    new mod.Quiz(questions);


}

main();