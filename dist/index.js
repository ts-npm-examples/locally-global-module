"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const left_pad_1 = __importDefault(require("left-pad"));
const reverse_1 = require("./reverse");
var reverse_2 = require("./reverse");
exports.bar = reverse_2.bar;
function padRight(str, len, ch) {
    return reverse_1.reverse(left_pad_1.default(reverse_1.reverse(str), len, ch));
}
exports.padRight = padRight;
//# sourceMappingURL=index.js.map