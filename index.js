const app = require('express')() // <---  currying
const http = require("http").createServer(app)
const io = require("socket.io")(http)

io.on("connection", socket => {
    console.log("A user connected")
})

app.get("/", (request, response) => {
    response.send("<h1>Hello World</h1>")
})

http.listen(4000, () => {
    console.log("Listening on port 4000")
})
