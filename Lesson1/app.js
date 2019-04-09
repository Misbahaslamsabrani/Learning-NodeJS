/* console.log("Hello world in Node!") */
/* const myFunction = require("./aSimpleFunction")
console.log(myFunction()) */

/* const validator = require("validator");
const myEmail = "misbah@gmail.com";
console.log(validator.isEmail(myEmail)); */


const chalk = require('chalk');
/* console.log(chalk.bgMagenta.bold.white('Hello world!')); 
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

/* yargs.command({
command: "add",
describe: "Adding Todo in the list",
builder: {
    addtodo: {
    describe: "add to todo",
    alias: "a",
    demandOption: true,
    type: "string",
    //default: "...",
    }
},
handler(argv){
    console.log(argv)
    console.log("okay done!",argv.add)

}
})
yargs.parse(); */
console.log(chalk.bold.red("Server Running...."))

//https://github.com/yargs/yargs/blob/HEAD/docs/advanced.md#commands
//http://yargs.js.org/docs/

const fs = require("fs");

const obj = {name: "misbah", gender: "female"}
const convOBj = JSON.stringify(obj);
console.log(convOBj)

fs.writeFileSync("DATA.text", convOBj) 

// fs.appendFileSync("DATA.text", convOBj)


try {
    const data = fs.readFileSync("DATA.text");
    //console.log(data)
    const parData = JSON.parse(data)
    console.log(parData)
}
catch (e) {
    console.log(e.message)
}
