const app = require('express')() // <---  currying
const http = require("http").createServer(app)

app.get("/", (request, response) => {
    response.send("<h1>Hello World</h1>")
})

http.listen(4000, () => {
    console.log("Listening on port 4000")
})
