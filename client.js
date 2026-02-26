const axios = require("axios");

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: { "X-Api-Key": "MIDTERMKEY123" }
});

async function run() {

    console.log("GET books");
    console.log((await api.get("/books")).data);

    console.log("POST book");
    console.log((await api.post("/books", {
        title: "Clean Code",
        author: "Robert Martin",
        quantity: 5
    })).data);

    console.log("Transfer success");
    console.log((await api.post("/transfer", {
        fromId: 1,
        toId: 2,
        amount: 50
    })).data);

    console.log("Transfer failure");
    console.log((await api.post("/transfer", {
        fromId: 1,
        toId: 2,
        amount: 1000
    })).data);
}

run();