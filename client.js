const axios = require("axios");

const api = axios.create({
    baseURL: "http://localhost:5043/api",
    headers: { "X-Api-Key": "MIDTERM_KEY_123" }
});

async function run() {

    console.log("GET books");
    console.log((await api.get("/books")).data);

    console.log("POST book");
    console.log((await api.post("/books", {
        title: "Python Crash Course",
        author: "Eric Matthes",
        quantity: 5
    })).data);

    try {
        const response = await api.post("/transfer", { fromId: 1, toId: 2, amount: 1000 });
        console.log("Transfer success:", response.data);
    } catch (err) {
        if (err.response) {
            console.log("Transfer failed:", err.response.data);
        } else {
            console.error("Network or other error:", err);
        }
    }

} 

run();