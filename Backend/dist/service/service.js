"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController = require("../controller/controller");
const router = express_1.default.Router();
router.get("/api/book/list", bookController.getAllBooks);
router.get("/api/book/search", bookController.getSearch);
router.get("/api/book/:id", bookController.getOneBook);
router.get("/api/book/order/all", bookController.getAllOrders);
router.post("/api/book/order/add", bookController.createOrder);
router.delete("/api/book/order/delete/:id", bookController.deleteOrder);
router.get("/api/book/order/:id", bookController.getOneOrder);
exports.default = router;
//# sourceMappingURL=service.js.map