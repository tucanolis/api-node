import http from "http";

const PORT = 3000;

const rotas = {
    "/": "curso de node.js"
}
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain"});
    res.end(rotas[res.url]);
});

server.listen(3000, () => {
    console.log("hello world!");
});