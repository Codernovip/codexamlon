const {readFileSync } = require("fs");
const login = require("facebook-chat-api");

loginPath = {appState: JSON.parse(readFileSync("appsate.json", "utf-8"))};

login(loginPath, (err,data) => {
    if (err) return console.error(err);

})
