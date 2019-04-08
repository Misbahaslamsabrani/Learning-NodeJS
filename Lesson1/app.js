/* console.log("Hello world in Node!") */
/* const myFunction = require("./aSimpleFunction")
console.log(myFunction()) */

/* const validator = require("validator");
const myEmail = "misbah@gmail.com";
console.log(validator.isEmail(myEmail)); */


/* const chalk = require('chalk');
console.log(chalk.bgMagenta.bold.white('Hello world!')); 
const myName = "misbah";
console.log(chalk`
my name is {bold.red ${myName}} !`) */

/* console.log(process.argv)
console.log(process.argv[2])
console.log(process.argv.username) */

const yargs = require("yargs")
/* console.log(yargs) */
/* console.log(yargs.argv)
console.log(yargs.argv.username) */

yargs.command({
    command: "add",
    describe: "Adding Todo in the list",
    builder: {
        title: "add todo",
        alias: "a",
        demandOption: true,
        type: "string",
        //default: "...",
    },
    handler(argv){
        console.log(argv.title)

    }
})
yargs.parse();
console.log("server running....")