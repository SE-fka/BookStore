"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const service_1 = __importDefault(require("./service/service"));
const cors = require('cors');
const app = (0, express_1.default)();
//MIDDLEWARE
app.use(express_1.default.json());
// Enable CORS for all routes
app.use(cors());
app.use(service_1.default);
const port = 3001;
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map