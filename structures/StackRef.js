"use strict";
exports.__esModule = true;
exports.StackRef = void 0;
var NodeUS_1 = require("./NodeUS");
var StackRef = /** @class */ (function () {
    function StackRef() {
        this.topStack = null;
        this.count = 0;
    }
    StackRef.prototype.empty = function () {
        return this.topStack == null;
    };
    StackRef.prototype.size = function () {
        return this.count;
    };
    StackRef.prototype.getTop = function () {
        if (this.topStack == null) {
            return null;
        }
        else {
            return this.topStack.getElement();
        }
    };
    StackRef.prototype.pop = function () {
        if (this.empty()) {
            return null;
        }
        else {
            var element = this.topStack.getElement();
            /*Node<T> aux = top.getNext();
            top = null;
            top = aux;*/
            this.topStack = this.topStack.getNext();
            this.count--;
            return element;
        }
    };
    StackRef.prototype.push = function (element) {
        var item = new NodeUS_1.NodeUS(element, this.topStack);
        this.topStack = item;
        this.count++;
        return item.getElement();
    };
    StackRef.prototype.toString = function () {
        var stack = "[";
        if (this.empty()) {
            stack += "]";
        }
        else {
            var aux = this.topStack;
            while ((aux === null || aux === void 0 ? void 0 : aux.getNext()) != null) {
                stack = "\n" + stack + aux.getData() + ",";
                aux = aux.getNext();
            }
            stack = stack + aux.getData() + "]";
        }
        return stack;
    };
    return StackRef;
}());
exports.StackRef = StackRef;
