// import http from "http";
import app from "./src/app.js";

const PORT = 3000;

// const rotas = {
//     "/": "curso de node.js",
//     "/cachorro": "entrei na rota cachorro",
//     "/racas": "entrei na rota racas"
// };
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/plain"});
//     res.end(rotas[req.url]);
// });

app.listen(3000, () => {
    console.log("servidor ok");
});

