"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const schema_1 = __importDefault(require("./schema"));
const app = express_1.default();
app.use(cors_1.default());
schema_1.default.applyMiddleware({ app });
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Graphql Server started on: http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map