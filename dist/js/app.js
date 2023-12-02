"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const config = require("../../config/config.dev.json");
const app = (0, express_1.default)();
const PORT = config.PORT;
const uri = config.MONGO_URL || "";
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(routes_1.default);
console.log(uri);
mongoose_1.default.connect(uri);
mongoose_1.default.connection.once('open', () => {
    app.emit('ready');
});
app.on('ready', function () {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
});
