import express from "express";
const bookController = require("../controller/controller");

const router = express.Router();

router.get("/api/book/list", bookController.getAllBooks) 

router.get("/api/book/search", bookController.getSearch) 

router.get("/api/book/:id", bookController.getOneBook)

router.get("/api/book/order/all", bookController.getAllOrders) 

router.post("/api/book/order/add", bookController.createOrder) 

router.delete("/api/book/order/delete/:id", bookController.deleteOrder)  

router.get("/api/book/order/:id", bookController.getOneOrder)

export default router;