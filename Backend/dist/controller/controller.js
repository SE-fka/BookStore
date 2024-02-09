"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../repository/db"));
//Get all Notes
exports.getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield db_1.default.query("SELECT * FROM Book");
        res.json(allBooks.rows);
    }
    catch (err) {
        console.error(err.message);
    }
});
//Get all Search by title
exports.getSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.title;
        const query = "SELECT * FROM Book WHERE title ILIKE $1";
        const values = [`%${searchTerm}%`];
        const result = yield db_1.default.query(query, values);
        res.json(result.rows);
    }
    catch (error) {
        console.error('Error searching books:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
//Get One book
exports.getOneBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const oneBook = yield db_1.default.query("SELECT * FROM Book WHERE book_id = $1", [id]);
        res.json(oneBook.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
});
//Get all Order
exports.getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allOrders = yield db_1.default.query("SELECT * FROM BookOrder");
        res.json(allOrders.rows);
    }
    catch (err) {
        console.error(err.message);
    }
});
//Create a order
exports.createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate the incoming JSON data
    const { title, writer, image, price, tag } = req.body;
    console.log(req.body);
    if (!title || !writer || !image || !price || !tag) {
        return res.status(400).send('One of the title, or writer, or image, or price, or tag is missing in the data');
    }
    try {
        // try to send data to the database
        const query = `
         INSERT INTO BookOrder (title, writer, image, price, tag)
         VALUES ($1, $2, $3, $4, $5 )
         RETURNING order_id;
       `;
        const values = [title, writer, image, price, tag];
        const result = yield db_1.default.query(query, values);
        res.status(201).send({ message: 'New Order created', albumId: result.rows[0].id });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('some error has occured');
    }
});
//Delete a Order
exports.deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteOrder = yield db_1.default.query("DELETE FROM bookorder WHERE order_id = $1", [id]);
        res.json("Order has been deleted");
    }
    catch (err) {
        console.error(err.message);
    }
});
//Get One book
exports.getOneOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const oneOrder = yield db_1.default.query("SELECT * FROM BookOrder WHERE order_id = $1", [id]);
        res.json(oneOrder.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
});
//# sourceMappingURL=controller.js.map