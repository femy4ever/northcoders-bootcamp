// GETting Api
// Build the following endpoint:

// GET /api
// Create a new file called server.js. Then, using Node's HTTP module, create a web server that responds with a status 200 and a greeting when it receives a GET request on the path /api (e.g. { message: "Hello! })
// Build the following endpoint:

// GET /api/books
// Add a GET /api/books endpoint that responds with a status 200 and a JSON object that has a key of books with a value of the array of books from the ./data/books.json file.

// GETting Books by Id
// Build the following endpoint:

// GET /api/books/:bookId
// Add a GET /api/books/:bookId (e.g. /api/books/1) parametric endpoint that responds with a status 200 and a JSON object that has a key of book with a value of the relevant book object from the ./data/books.json file.

const http = require("http");
const fs = require("fs/promises");

const books = require("./data/books.json")
// const idBooks= books.map(book => {
//     return book.bookId
// })
// let validUrl2=``
// const validUrl= idBooks.forEach((element)=>{
//  return `/api/books/${element}`})
// console.log(idBooks)
// console.log(element)
// console.log(books)
// console.log(validUrl)

function handleRequest(request, response) {
    const {method, url} = request;
    const idBooks= books.map(book => {
        return book.bookId
    })
    const validUrl= idBooks.forEach((element)=>{
        return `/api/books/${element}`})
    console.log(validUrl)    




    if(method === "GET" && url === "/api") {
        const responseBody = {message: "Hello!"};
        response.setHeader("contentType", "application/json");
        response.statusCode = 200;
        response.write(JSON.stringify(responseBody));
        response.end()
    }
    else if (method === "GET" && url === "/api/books") {
        fs.readFile(`${__dirname}/data/books.json`).then((data) => {
            const books = JSON.parse(data);
            const responseBody = {books: books};
            response.setHeader("contentType", "application/json");
            response.statusCode = 200;
            response.write(JSON.stringify(responseBody));
            response.end()
        })
    }
    else if (method === "GET" && url === "/api/authors") {
            fs.readFile(`${__dirname}/data/authors.json`).then((data) => {
                const authors = JSON.parse(data);
                const responseBody = {authors: authors};
                response.setHeader("contentType", "application/json");
                response.statusCode = 200;
                response.write(JSON.stringify(responseBody));
                response.end()
            })
    }
    else if (method === "GET" && url === `${validUrl}`) {
        fs.readFile(`${__dirname}/data/books.json`).then((data) => {
            const books = JSON.parse(data);
            const responseBody = {books: books.idBooks};
            response.setHeader("contentType", "application/json");
            response.statusCode = 200;
            response.write(JSON.stringify(responseBody));
            response.end()
        })
        
    }
}
const app = http.createServer(handleRequest);
app.listen(9090);