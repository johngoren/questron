const csv = require('csv-parser')
const fs = require('fs');
const FILENAME_PATH = "../src/data/script.csv";

function convert() {
    getScriptJSON();
}

function getScriptJSON() {
    return getJSONFromFile(FILENAME_PATH);
}

function getJSONFromFile(path) {
    const results = [];
s
    fs.createReadStream(path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            const json = parseCSVIntoJSON(results);
            dumpJSON(json);
        });
    return null;
}

function parseCSVIntoJSON(results) {
    return results.map(item => {
        const title = item["Title"];
        const body = item["Body Text"];
        const choices = parseChoicesFromItem(item);
        return {
            title: title,
            body: body,
            choices: choices
        }
    });
}

function parseChoicesFromItem(item) {
    const newChoices = [];
    const buttonKeys = ["Button1", "Button2", "Button3"];

    for (buttonKey of buttonKeys) {
        const newChoice = parseChoiceFromItem(buttonKey, item);
        if (newChoice != null) { newChoices.push(newChoice); }
    }

    return newChoices;
}

function parseChoiceFromItem(buttonKey, item) {
    const newChoice = {};
    const fields = ["Title", "Feedback", "Extra"];

    for (field of fields) {
        const key = `${buttonKey} ${field}`;
        const value = item[key];
        if (value != null) {
            newChoice[field.toLowerCase()] = value;
        }
    }
    return newChoice;
}

function dumpJSON(arr) {
    console.log(arr);
    fs.writeFileSync('game.json', JSON.stringify(arr));
}

convert();