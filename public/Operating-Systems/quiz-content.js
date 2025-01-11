import * as mod from "../../quiz.js";


function main() {

    let question1 = new mod.Question(
        1,
        'Linux uses the freeware ____ shell as its default command interpreter.?',
        new Set(['Bash']),
        new Set(['Bourne', 'C','Korn']),
        "Bourne Again Shell is created in C and is the default command interpreter. Korn is a separate shell."
    )

    let question2 = new mod.Question(
        2,
        'Linix Kernal is',
        new Set(['The core of Linux']),
        new Set(['Linux itself', 'an Operating System']),
        `Remember: The Kernal translates and manages data through management of the hardware. The kernel is the core of the operating system, but not the entire operating system.`
    )

    let question3 = new mod.Question(
        3,
        'Unix-likes',
        new Set(['Mac-OS', 'RedHat','Debian','Arch Linux']),
        new Set(['Windows']),
        `Windows is based on MS-DOS, a disk operating system.`
    )
    let question4 = new mod.Question(
        4,
        '____ is responsible for machine-local configuration files',
        new Set(['/etc']),
        new Set(['/sbin','/bin','/boot']),
        `sbin holds system binarys for system administrators, while bin holds essential command binaries for user's and their managment,
        boot holds files for booting the system up. `
    )
    let question5 = new mod.Question(
        5,
        'A Symbolic Links is',
        new Set(['a reference to another file']),
        new Set(['a reference physical devices','a reference to images, binary, and videos']),
        `A symbolic link is a reference to another file. It's also called a softlinke. Refereces to physcial devices are special files. References to images, videos, and images are just regular files.`
    )
    let question6 = new mod.Question(
        6,
        'anyone with access to the system is refered to as',
        new Set(['Others']),
        new Set(['else','user', 'all']),
        `In chmod and general file ownership Others is the term used for anyone with access to the file system.`
    )

    //test
    let questions = [question1, question2, question3, question4, question5, question6];
    new mod.Quiz(questions);


}

main();