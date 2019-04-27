"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(str) {
    if (typeof str === 'number')
        str = '' + str;
    return [...str].reverse().join('');
}
exports.reverse = reverse;
// Functions that reference internal types must not be exported...
function foo(a) {
    return a.stuff;
}
// ... but exported functions can use the types internally
function bar() {
    const a = 'foo';
    const b = { stuff: [a], thing: 2 };
    return foo(b)[0];
}
exports.bar = bar;
//# sourceMappingURL=reverse.js.map