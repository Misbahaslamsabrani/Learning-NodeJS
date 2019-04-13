const request = require("request");
const Chalk = require("chalk");
console.log(Chalk.red.bold("Server is Running . . . ."))
const word = process.argv[2];
if (word !== undefined) {
    const options = {
        url: "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/" + word,
        headers: {
            "Accept": "application/json",
            "app_id": "b10ab0a8",
            "app_key": "d33481908673b5cb02fb493e846e4fb1"
        },
    }
    request(options, (error, response) => {
        if (response) {
            if (response.statusCode === 200) {
                const data = response.body;
                const parsedData = JSON.parse(data)
                const def = parsedData.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
                console.log(Chalk`{bold.black.bgWhite  ${word}  }: {magenta  ${def}  }`)
            }
            else if (response.statusCode === undefined) {
                console.log(Chalk.red.bold("Error: something went wrong!"))
            }
            else if (response.statusCode === 404) {
                console.log(Chalk.gray("404: Not Found"))
                console.log(Chalk.yellow.bold(`No entry available for '${word}'.`))
            }
        }
        else {
                console.log(Chalk.red.bold("Error: something went wrong!"))
        }
        })
}
else {
    console.log(Chalk.bgRed.bold.white("Please Enter the word you want to search."))
}